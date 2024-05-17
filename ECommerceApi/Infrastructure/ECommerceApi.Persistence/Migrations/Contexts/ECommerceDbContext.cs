using ECommerceApi.Domain.Entities;
using ECommerceApi.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ECommerceApi.Persistence.Contexts
{
    public class ECommerceDbContext : IdentityDbContext<AppUser,AppRole,string>
    {
        public ECommerceDbContext(DbContextOptions options) : base(options)
        {

        }

        DbSet<Product> Products { get; set; }
        DbSet<Customer> Customers { get; set; }
        DbSet<Order> Orders { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var datas = ChangeTracker.Entries<BaseEntity>();

            foreach (var data in datas)
            {

                switch (data.State)
                {
                    case EntityState.Added:
                        {
                            data.Entity.CreatedDate = DateTime.UtcNow;
                            data.Entity.UpdatedDate = DateTime.UtcNow;
                            break;
                        }

                    case EntityState.Modified:
                        {
                            data.Entity.UpdatedDate = DateTime.UtcNow;
                            break;
                        }
                }
            }
            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
