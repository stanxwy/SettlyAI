using SettlyModels.Dtos;

namespace ISettlyService
{
    public interface ISuburbService
    {
        Task<SuburbDto?> GetSuburbsByIdAsync(int id);
    }
}
