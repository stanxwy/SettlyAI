namespace ISettlyService;
using SettlyModels.Enums;
public interface IVerificationCodeService
{
    Task<(string code, VerificationType actualType)> GenerateAndSaveCodeAsync(int userId,
        VerificationType? verificationType);
}
