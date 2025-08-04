using ISettlyService;
using Microsoft.EntityFrameworkCore;
using Settly.DTOs;
using SettlyModels;
using SettlyModels.DTOs;
using SettlyModels.Entities;
namespace SettlyService
{
    public class SearchService : ISearchService
    {
        private readonly SettlyDbContext _context;
        public SearchService(SettlyDbContext context)
        {
            _context = context;
        }

        #region Function QuerySearchAsync
        public async Task<List<SearchOutputDto>> QuerySearchAsync(string query)
        {
            // 1. Tokenize & filter out trivial terms
            var inputTokens = GetInputTokens(query);
            if (!inputTokens.Any())
                return new List<SearchOutputDto>();

            // 2. Parse postcode, state & remaining keywords, return empty list if nothing match with our Database
            var (postcode, state, searchKeywords) = ExtractSearchKeywords(inputTokens);
            if (!HasSearchCriteria(postcode, state, searchKeywords))
                return new List<SearchOutputDto>();

            // 3. Build and refine the Suburb query for Database
            var suburbQ = BuildSuburbQuery(postcode, state, searchKeywords)
                             .AsNoTracking()
                             .OrderBy(s => s.Name);

            // 4. Execute to get matching suburb IDs in our Suburb table
            var suburbIds = await suburbQ.Select(s => s.Id).ToListAsync();
            if (!suburbIds.Any())
                return new List<SearchOutputDto>();

            // 5. If any keyword is a property type, attempt a Property search using suburb IDs we obtained in step 5.
            var propertyTypes = new[] { "House", "Apartment", "Townhouse", "Unit", "Villa" };
            if (searchKeywords.Any(k => propertyTypes.Contains(k, StringComparer.OrdinalIgnoreCase)))
            {
                var props = await SearchPropertiesAsync(suburbIds, searchKeywords);
                if (props.Any())
                    return props;
            }

            // 6. Fallback: return Suburb-only results if no keyword matches with Properties table
            return await SearchSuburbsAsync(suburbQ);
        }
        #endregion

        #region Function GetSuggestionsAsync        
        public async Task<List<SuggestionOutputDto>> GetSuggestionsAsync(string query)
        {
            // 1. If input is empty, null or with a length < 3, return an empty list
            if (string.IsNullOrEmpty(query) || query.Length < 3)
            {
                return new List<SuggestionOutputDto>();
            }

            // 2.Escape wildcards and build prefix pattern for user query
            var pattern = $"{EscapeForLike(query)}%";

            // 3. Build and execute the combined suggestion query by search via table Subrbs and Properties in database
            return await BuildCombinedSuggestionQuery(pattern).ToListAsync();
        }
        #endregion

        #region Function AskBotAsync
        public async Task<BotOutputDto> AskBotAsync(string query)
        {
            return await Task.FromResult(new BotOutputDto
            {
                Response = $"Hello! You asked about: {query}. This chatbot feature is coming soon!",
                Timestamp = DateTime.UtcNow
            });
        }
        #endregion

        #region Helper Functions for Function QuerySearchAsync

        // 1) Australian postcode: exactly 4 numeric digits
        private bool IsPostcode(string inputToken)
            => inputToken.Length == 4
               && int.TryParse(inputToken, out _);

        // 2) Australian state code (NSW, VIC, QLD, etc.)
        private static readonly HashSet<string> _states = new(StringComparer.OrdinalIgnoreCase)
        {
            "NSW","VIC","QLD","WA","SA","TAS","ACT","NT"
        };
        private bool IsState(string inputToken)
            => _states.Contains(inputToken);

        // 3) Common address terms to ignore (ave, st, rd, etc.)
        private static readonly HashSet<string> _commonWords = new(StringComparer.OrdinalIgnoreCase)
        {
            "avenue","ave","street","st","road","rd",
            "drive","dr","lane","ln","court","ct",
            "place","pl","way","crescent","cres"
        };
        private bool IsCommonWord(string inputToken)
            => _commonWords.Contains(inputToken);

        // 4) Tokenize & clean
        //    Split raw query by common separators, trim, drop <2-char tokens.
        private string[] GetInputTokens(string query)
        {

            var separators = new[] { ' ', ',', '-', '/' };
            return query
                .Split(separators, StringSplitOptions.RemoveEmptyEntries)
                .Select(t => t.Trim())
                .Where(t => t.Length >= 2)
                .ToArray();
        }

        // 5) Returns true if the user supplied at least one search criterion (postcode, state, or free-text keywords).

        private bool HasSearchCriteria(string postcode, string state, List<string> keywords)
            => !string.IsNullOrEmpty(postcode) || !string.IsNullOrEmpty(state) || keywords.Any();

        // 6) Classify tokens
        //    Extract postcode, state; collect everything else as keywords.
        private (string Postcode, string State, List<string> Keywords) ExtractSearchKeywords(string[] tokens)
        {
            string postcode = "", state = "";
            var keywords = new List<string>();

            foreach (var t in tokens)
            {
                if (IsPostcode(t)) postcode = t;
                else if (IsState(t)) state = t.ToUpper();
                else if (!IsCommonWord(t)) keywords.Add(t);
            }

            return (postcode, state, keywords);
        }

        // 7) Build ILIKE pattern
        //    Escape SQL wildcards, then wrap in % for a contains-style search.
        private string BuildLikePattern(string token)
        {
            var escaped = token
                .Replace("%", "\\%")
                .Replace("_", "\\_");
            return $"%{escaped}%";
        }

        // 8) Build Suburb query
        //    Apply postcode, state and name-keyword filters to Suburbs set.
        private IQueryable<Suburb> BuildSuburbQuery(
            string postcode,
            string state,
            List<string> searchKeywords)
        {
            var q = _context.Suburbs.AsQueryable();

            if (!string.IsNullOrEmpty(postcode))
                q = q.Where(s => s.Postcode == postcode);

            if (!string.IsNullOrEmpty(state))
                q = q.Where(s => EF.Functions.ILike(s.State, state));

            foreach (var kw in searchKeywords)
            {
                var pat = BuildLikePattern(kw);
                q = q.Where(s => EF.Functions.ILike(s.Name, pat));
            }

            return q;
        }

        // 9) Search Properties
        //    In the given suburb IDs, filter properties by type/address keywords,
        //    then project into DTOs.
        private async Task<List<SearchOutputDto>> SearchPropertiesAsync(
            IEnumerable<int> suburbIds,
            List<string> searchKeywords)
        {
            var q = _context.Properties
                .AsNoTracking()
                .Include(p => p.Suburb)
                .Where(p => suburbIds.Contains(p.SuburbId));

            foreach (var kw in searchKeywords)
            {
                var pat = BuildLikePattern(kw);
                q = q.Where(p =>
                    EF.Functions.ILike(p.PropertyType, pat) ||
                    EF.Functions.ILike(p.Address, pat));
            }

            return await q
                .OrderBy(p => p.Price)
                .Select(p => new SearchOutputDto
                {
                    Address = p.Address,
                    PropertyType = p.PropertyType,
                    Price = p.Price,
                    Name = p.Suburb.Name,
                    State = p.Suburb.State,
                    Postcode = p.Suburb.Postcode
                })
                .ToListAsync();
        }

        // 10) Search Suburbs
        //    Project the Suburb query into DTOs.
        private Task<List<SearchOutputDto>> SearchSuburbsAsync(IQueryable<Suburb> suburbQ)
            => suburbQ
                .Select(s => new SearchOutputDto
                {
                    Name = s.Name,
                    State = s.State,
                    Postcode = s.Postcode
                })
                .ToListAsync();
        #endregion

        #region Helper Functions for Function GetSuggestionsAsync
        // 1. Escape SQL wildcard characters of user query
        private string EscapeForLike(string input)
        {
            return input
                .Replace("%", "\\%")
                .Replace("_", "\\_");
        }

        // 2. Build a SQL query for suburbs whose Name starts with the given pattern
        private IQueryable<SuggestionOutputDto> SuggestBySuburbNamePattern(string pattern)
        {
            return _context.Suburbs
                .AsNoTracking()
                .Where(s => EF.Functions.ILike(s.Name, pattern))
                .Select(s => new SuggestionOutputDto
                {
                    Name = s.Name,
                    State = s.State,
                    Postcode = s.Postcode
                });
        }

        // 3. Build a query for suburbs whose State starts with the given pattern
        private IQueryable<SuggestionOutputDto> SuggestBySuburbStatePattern(string pattern)
        {
            return _context.Suburbs
                .AsNoTracking()
                .Where(s => EF.Functions.ILike(s.State, pattern))
                .Select(s => new SuggestionOutputDto
                {
                    Name = s.Name,
                    State = s.State,
                    Postcode = s.Postcode
                });
        }

        // 4. Build a query for suburbs whose Postcode starts with the given pattern
        private IQueryable<SuggestionOutputDto> SuggestBySuburbStateCodePattern(string pattern)
        {
            return _context.Suburbs
                .AsNoTracking()
                .Where(s => EF.Functions.ILike(s.Postcode, pattern))
                .Select(s => new SuggestionOutputDto
                {
                    Name = s.Name,
                    State = s.State,
                    Postcode = s.Postcode
                });
        }

        // 5. Build a query for properties whose Address starts with the given pattern
        private IQueryable<SuggestionOutputDto> SuggestByPropertyAddressPattern(string pattern)
        {
            return _context.Properties
                .AsNoTracking()
                .Include(p => p.Suburb)
                .Where(p => EF.Functions.ILike(p.Address, pattern))
                .Select(p => new SuggestionOutputDto
                {
                    Name = p.Address,
                    State = p.Suburb.State,
                    Postcode = p.Suburb.Postcode
                });
        }

        // 6. Combine all individual queries into one ordered suggestion stream
        private IQueryable<SuggestionOutputDto> BuildCombinedSuggestionQuery(string pattern)
        {
            var suburbsByName = SuggestBySuburbNamePattern(pattern);
            var suburbsByState = SuggestBySuburbStatePattern(pattern);
            var suburbsByStateCode = SuggestBySuburbStateCodePattern(pattern);
            var propertiesByAddress = SuggestByPropertyAddressPattern(pattern);

            return suburbsByName
                .Union(suburbsByState)
                .Union(suburbsByStateCode)
                .Union(propertiesByAddress)
                .OrderBy(s => s.Name);
        }
        #endregion


    }
}
