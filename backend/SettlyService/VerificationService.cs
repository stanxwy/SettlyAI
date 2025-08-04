using ISettlyService;
using SettlyModels;
using SettlyModels.Entities;

namespace SettlyService;

public class VerificationCodeService : IVerificationCodeService
{
    private readonly SettlyDbContext _context;

    public VerificationCodeService(SettlyDbContext context)
    {
        _context = context;
    }

    public async Task<string> GenerateAndSaveCodeAsync(int userId)
    {
        var code = new Random().Next(100000, 999999).ToString();
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

        return code;
    }
}
