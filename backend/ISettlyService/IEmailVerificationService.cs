namespace ISettlyService;

public interface IEmailVerificationService
{
    Task GenerateAndSendVerificationCodeAsync(int userId, string email);
}
