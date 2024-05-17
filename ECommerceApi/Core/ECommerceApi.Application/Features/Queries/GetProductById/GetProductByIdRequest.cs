using ECommerceApi.Application.Features.Queries.GetAllProducts;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Features.Queries.GetProductById
{
    public class GetProductByIdRequest: IRequest<GetProductByIdResponse>
    {
        public string Id { get; set; }

    }
}
