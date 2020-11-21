using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using unihack.Entities;

namespace unihack.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
//          public DbSet<Entity Name> HeaterEntities { get; set; }
            public DbSet<HealthStateEntity> HealthStateEntities { get; set; }
          public DbSet<ProfileEntity> ProfileEntities { get; set; }


          public IRepository<T> GetRepository<T>() where T: Entity
        {
            return new Repository<T>(this);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
//            builder.Entity<StationEntity>()
//                .Property(e => e.Location).HasConversion(
//                    v => JsonConvert.SerializeObject(v),
//                    v => JsonConvert.DeserializeObject<PointF>(v));
            
            base.OnModelCreating(builder);
        }
    }
}