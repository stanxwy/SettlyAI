using ISettlyService;
using Microsoft.AspNetCore.Mvc;
using SettlyModels.Dtos;

namespace SettlyApi.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<ResponseUserDto>> Register([FromBody] RegisterUserDto dto)
    {
        var user = await _userService.RegisterAsync(dto);
        return Ok(user);
    }
}
