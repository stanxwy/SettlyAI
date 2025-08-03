using SettlyModels.Dtos;

namespace ISettlyService;

public interface IFavouriteService
{
    Task AddFavouriteAsync(AddFavouriteDto dto, int userId);
}
