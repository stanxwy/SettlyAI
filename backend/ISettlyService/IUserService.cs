using SettlyModels.Dtos;

namespace ISettlyService;

public interface IUserService
{
    Task<ResponseUserDto> RegisterAsync(RegisterUserDto user);
}
