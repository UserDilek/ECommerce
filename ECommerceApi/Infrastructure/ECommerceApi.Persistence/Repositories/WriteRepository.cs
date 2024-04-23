using ECommerceApi.Application.Repositories;
using ECommerceApi.Domain.Entities;
using ECommerceApi.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence.Repositories
{
    public class WriteRepository<T> : IWriteRepository<T> where T : BaseEntity
    {

        private readonly ECommerceDbContext _context;

        public WriteRepository(ECommerceDbContext context)
        {
            _context = context;
        }

        public Microsoft.EntityFrameworkCore.DbSet<T> Table => _context.Set<T>();

        public async Task<bool> AddAsync(T model)
        {
            EntityEntry<T> entityEntry = await Table.AddAsync(model);
            return entityEntry.State == EntityState.Added;
        }

        public async Task<bool> AddRangeAsync(List<T> model)
        {
            await Table.AddRangeAsync(model);
            return true;

        }
        public async Task<bool> RemoveAsync(string id)
        {
            var entity = await Table.FirstOrDefaultAsync(p => p.Id == Guid.Parse(id));
            var entityEntry = Table.Remove(entity);
            return entityEntry.State == EntityState.Deleted;
        }

        public bool Remove(T model)
        {
            EntityEntry<T> entityEntry = Table.Remove(model);
            return entityEntry?.State == EntityState.Deleted;
        }

        public bool RemoveRange(List<T> datas)
        {
            _context.RemoveRange(datas);
            return true;
        }

        public bool Update(T model)
        {
            var entity = Table.Update(model);
            return entity.State == EntityState.Modified;
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public async  Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
