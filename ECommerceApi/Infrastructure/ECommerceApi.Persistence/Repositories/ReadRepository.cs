using ECommerceApi.Application.Repositories;
using ECommerceApi.Domain.Entities;
using ECommerceApi.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence.Repositories
{
    public class ReadRepository<T> : IReadRepository<T> where T : BaseEntity
    {
        private readonly ECommerceDbContext _context;

        public ReadRepository(ECommerceDbContext context)
        {
            _context = context;       
        }
        public DbSet<T> Table => _context.Set<T>();

        public  IQueryable<T> GetAll() => Table;
        public async Task<T> GetByIdAsync(string id) => await Table.FindAsync(id);

        public Task<T> GetSingleAsync(Expression<Func<T, bool>> method) => Table.FirstOrDefaultAsync(method);

        public IQueryable<T> GetWhere(Expression<Func<T, bool>> method) => Table.Where(method);
    }

}
