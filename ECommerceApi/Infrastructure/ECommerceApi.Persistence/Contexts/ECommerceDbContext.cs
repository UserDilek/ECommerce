using ECommerceApi.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence.Contexts
{
    public class ECommerceDbContext : DbContext
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
                        }# 

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
