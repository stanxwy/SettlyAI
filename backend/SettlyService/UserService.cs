using ISettlyService;
using Microsoft.EntityFrameworkCore;
using SettlyModels;
using SettlyModels.Dtos;
using SettlyModels.Entities;
using SettlyService.Exceptions;

namespace SettlyService;

public class UserService : IUserService
{
    private readonly SettlyDbContext _context;
    private readonly IEmailVerificationService _emailVerificationService;

    public UserService(SettlyDbContext context, IEmailVerificationService emailVerificationService)
    {
        _context = context;
        _emailVerificationService = emailVerificationService;
    }

    public async Task<ResponseUserDto> RegisterAsync(RegisterUserDto RegisterUser)
    {
        var existing = await _context.Users.FirstOrDefaultAsync(u => u.Email == RegisterUser.Email);
        if (existing is not null)
        {
            if (existing.IsActive)
                throw new ArgumentException("Email is already registered.");
            throw new EmailUnverifiedException("Email is registered but not yet verified.");
        }

        var user = new User
        {
            Name = RegisterUser.FullName,
            Email = RegisterUser.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(RegisterUser.Password),
            CreatedAt = DateTime.UtcNow
        };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            await _emailVerificationService.GenerateAndSendVerificationCodeAsync(user.Id, user.Email);

        return new ResponseUserDto
        {
            Id = user.Id,
            FullName = user.Name,
            Email = user.Email
        };
    }
}
