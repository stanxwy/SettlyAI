using Microsoft.EntityFrameworkCore;
using SettlyModels.Entities;

namespace SettlyModels;

public class SettlyDbContext : DbContext
{
    public SettlyDbContext(DbContextOptions<SettlyDbContext> options) : base(options)
    {
        
    }
    public DbSet<Suburb> Suburbs { get; set; }
    public DbSet<SuburbReport> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Suburb>(b =>
        {
            b.ToTable("Suburbs");
            b.HasKey(x => x.Id);
        });
    
        modelBuilder.Entity<SuburbReport>(b =>
        {
            b.ToTable("SuburbReport");
            b.HasKey(x => x.Id);
        });
    }
}