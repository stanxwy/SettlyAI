using SettlyModels.Dtos;
using SettlyModels.Entities;

namespace ISettlyService;

public interface IFavouriteService
{
    Task AddFavouriteAsync(AddFavouriteDto dto, int userId);
    //Get all favourite for Favourite page
    Task<List<Favourite>> GetFavouritesByUserAsync(int userId);
    Task<bool> DeleteFavouriteAsync(int userId, string targetType, int targetId);
    Task<bool> ToggleFavouriteAsync(AddFavouriteDto dto, int userId);
    Task<Favourite?> GetSingleFavouriteAsync(string targetType, int targetId, int userId);
}
