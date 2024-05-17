using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Features.Commands.Product.RemoveProduct
{
    public class RemoveProductRequest :IRequest<RemoveProductResponse>
    {
        public string Id { get; set; }
    }
}
