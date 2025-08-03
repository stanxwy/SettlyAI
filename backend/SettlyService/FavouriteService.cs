using SettlyModels.Dtos;
using SettlyModels;
using SettlyModels.Entities;
using ISettlyService;

namespace SettlyService
{
    public class FavouriteService : IFavouriteService
    {
        private readonly SettlyDbContext _context;

        public FavouriteService(SettlyDbContext context)
        {
            _context = context;
        }

        public async Task AddFavouriteAsync(AddFavouriteDto dto, int userId)
        {
            var favourite = new Favourite
            {
                UserId = userId,
                TargetType = dto.TargetType,
                TargetId = dto.TargetId,
                Notes = dto.Notes,
                Priority = dto.Priority,
                CreatedAt = DateTime.UtcNow
            };

            _context.Favourites.Add(favourite);
            await _context.SaveChangesAsync();
        }
    }
}
