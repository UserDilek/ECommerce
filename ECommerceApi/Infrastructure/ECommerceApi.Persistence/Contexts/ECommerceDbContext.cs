using ECommerceApi.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence.Contexts
{
    public class ECommerceDbContext : DbContext
    {
        public ECommerceDbContext(DbContextOptions options):base(options)
        {
            
        }

        DbSet<Product> Products { get;  set; }
        DbSet<Customer> Customers { get; set; }
        DbSet<Order> Orders { get; set; }
    }
}
