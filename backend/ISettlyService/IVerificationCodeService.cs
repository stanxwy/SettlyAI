namespace ISettlyService;

public interface IVerificationCodeService
{
    Task<string> GenerateAndSaveCodeAsync(int userId);
}
