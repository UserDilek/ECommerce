using ECommerceApi.Application.Repositories;
using ECommerceApi.Domain.Entities;
using ECommerceApi.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading.Tasks.Dataflow;

namespace ECommerceApi.Persistence.Repositories
{
    public class ProductReadRepository: ReadRepository<Product>, IProductReadRepository
    {
        public ProductReadRepository(ECommerceDbContext context) : base(context)
        {

        }



    }
}
