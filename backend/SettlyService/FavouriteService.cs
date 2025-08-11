using SettlyModels.Dtos;
using SettlyModels;
using SettlyModels.Entities;
using ISettlyService;
using Microsoft.EntityFrameworkCore;

namespace SettlyService
{
    public class FavouriteService : IFavouriteService
    {
        private readonly SettlyDbContext _context;

        public FavouriteService(SettlyDbContext context)
        {
            _context = context;
        }

        public async Task<List<Favourite>> GetFavourites(int userId)
        {
            // Mock data instead of database query
            var mockFavourites = new List<Favourite>
            {
                new Favourite
                {
                    Id = 1,
                    UserId = userId,
                    TargetType = "Property",
                    TargetId = 101,
                    CreatedAt = DateTime.UtcNow.AddDays(-5),
                    Notes = "Great location near the city center",
                    Priority = 1
                },
                new Favourite
                {
                    Id = 2,
                    UserId = userId,
                    TargetType = "Property",
                    TargetId = 102,
                    CreatedAt = DateTime.UtcNow.AddDays(-3),
                    Notes = "Good investment potential",
                    Priority = 2
                },
                new Favourite
                {
                    Id = 3,
                    UserId = userId,
                    TargetType = "Suburb",
                    TargetId = 201,
                    CreatedAt = DateTime.UtcNow.AddDays(-1),
                    Notes = "Family-friendly neighborhood",
                    Priority = 3
                }
            };

            return await Task.FromResult(mockFavourites);
        }
        
        public async Task<bool> ToggleFavouriteAsync(AddFavouriteDto dto, int userId)
        {
            var existing = await _context.Favourites.FirstOrDefaultAsync(f => f.UserId == userId && f.TargetType == dto.TargetType && f.TargetId == dto.TargetId);
            if (existing != null)
            {
                _context.Favourites.Remove(existing);
                await _context.SaveChangesAsync();
                return false;
            }//cancel saved
            var newFavourite = new Favourite
            {
                UserId = userId,
                TargetType = dto.TargetType,
                TargetId = dto.TargetId,
                Notes = dto.Notes,
                Priority = dto.Priority,
                CreatedAt = DateTime.UtcNow,
            };
            _context.Favourites.Add(newFavourite);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<Favourite?> GetSingleFavouriteAsync(string targetType, int targetId, int userId)
        {
            return await _context.Favourites.FirstOrDefaultAsync(f => f.UserId ==userId && f.TargetType == targetType && f.TargetId == targetId);
        }
    }
}
