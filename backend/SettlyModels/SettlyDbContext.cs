using Microsoft.EntityFrameworkCore;

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
            b.ToTable("Teachers");
            b.HasKey(x => x.Id);
        });

        modelBuilder.Entity<SuburbReport>(b =>
        {
            b.ToTable("Users");
            b.HasKey(x => x.Id);
        });
    }
}