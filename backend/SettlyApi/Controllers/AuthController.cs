using ISettlyService;
using Microsoft.AspNetCore.Mvc;
using SettlyModels.Dtos;
using SettlyModels.Enums;

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
        var (code, actualType) = await _verificationCodeService.GenerateAndSaveCodeAsync(user.Id, registerUser.VerificationType);

        switch (actualType)
        {
            case VerificationType.Email:
                await _emailSender.SendAsync(
                    user.Email,
                    "Email Verification Code",
                    $"Your email verification code is {code}."
                );
                break;

            default:
                throw new ArgumentException($"Unsupported verification type: {registerUser.VerificationType}");
        }

        return Ok(user);
    }
}
