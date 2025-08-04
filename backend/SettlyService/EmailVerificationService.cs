using ISettlyService;
using SettlyModels;
using SettlyModels.Entities;

namespace SettlyService;

public class EmailVerificationService : IEmailVerificationService
{
    private readonly SettlyDbContext _context;
    private readonly IEmailSender _emailSender;

    public EmailVerificationService(SettlyDbContext context, IEmailSender emailSender)
    {
        _context = context;
        _emailSender = emailSender;
    }

    public async Task GenerateAndSendVerificationCodeAsync(int userId, string email)
    {
        var code = Generate6DigitCode();
        var expiry = DateTime.UtcNow.AddMinutes(15);

        var verification = new EmailVerification
        {
            UserId = userId,
            Code = code,
            CreatedAt = DateTime.UtcNow,
            Expiry = expiry,
            IsUsed = false
        };

        _context.EmailVerifications.Add(verification);
        await _context.SaveChangesAsync();

        // Stub: will finish in future card
        await _emailSender.SendAsync(email, "Your verification code", $"Your code is: {code}");
    }

    private string Generate6DigitCode()
    {
        var random = new Random();
        return random.Next(100000, 999999).ToString();
    }
}
