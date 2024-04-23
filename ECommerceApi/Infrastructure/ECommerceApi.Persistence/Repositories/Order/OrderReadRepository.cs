﻿using ECommerceApi.Application.Repositories;
using ECommerceApi.Domain.Entities;
using ECommerceApi.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence.Repositories
{
    public class OrderReadRepository: ReadRepository<Order> , IOrderReadRepository
    {
        public OrderReadRepository(ECommerceDbContext context) :base(context)
        {
            
        }
    }
}
