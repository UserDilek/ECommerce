﻿using ECommerceApi.Application.Abstraction;
using ECommerceApi.Persistence.Concreate;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Persistence
{
    public static class ServiceRegistration
    {
        public static void AddPersistanceService(this IServiceCollection services)
        {
            services.AddSingleton<IProductService, ProductService>();

        }
    }
}