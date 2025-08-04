using ISettlyService;
using Microsoft.AspNetCore.Mvc;
using SettlyModels.Dtos;

namespace SettlyApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<ActionResult<ResponseUserDto>> Register(RegisterUserDto RegisterUser)
    {
            var user = await _userService.RegisterAsync(RegisterUser);
            return Ok(user);
    }
}
