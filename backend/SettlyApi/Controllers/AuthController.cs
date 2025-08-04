using ISettlyService;
using Microsoft.AspNetCore.Mvc;
using SettlyModels.Dtos;

namespace SettlyApi.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IVerificationCodeService _verificationCodeService;
    private readonly IEmailSender _emailSender;

    public AuthController(IUserService userService, IVerificationCodeService verificationCodeService, IEmailSender emailSender)
    {
        _userService = userService;
        _verificationCodeService = verificationCodeService;
        _emailSender = emailSender;
    }

    [HttpPost("register")]
    public async Task<ActionResult<ResponseUserDto>> Register([FromBody] RegisterUserDto registerUser)
    {
        var user = await _userService.RegisterAsync(registerUser);
        var code  = await _verificationCodeService.GenerateAndSaveCodeAsync(user.Id);
        await _emailSender.SendAsync(
            user.Email,
            "Email Verification Code",
            $"Your verification code is: {code}"
        );
        return Ok(user);
    }
}
