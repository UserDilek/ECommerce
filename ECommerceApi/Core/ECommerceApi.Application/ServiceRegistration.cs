using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application
{
    public static class ServiceRegistration
    {
        public static void AddApplicationService(this IServiceCollection service)
        {
            service.AddMediatR(typeof(ServiceRegistration));
        }        
    }
}
