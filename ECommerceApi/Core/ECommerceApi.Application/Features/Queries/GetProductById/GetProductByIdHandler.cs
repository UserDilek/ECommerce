using ECommerceApi.Application.Repositories;
using MediatR;
using Microsoft.AspNetCore.Mvc.Formatters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Features.Queries.GetProductById
{
    internal class GetProductByIdHandler : IRequestHandler<GetProductByIdRequest, GetProductByIdResponse>
    {
        private readonly IProductReadRepository _productReadService;
        public GetProductByIdHandler(IProductReadRepository productReadService)
        {
            _productReadService = productReadService;
        }
        public async Task<GetProductByIdResponse> Handle(GetProductByIdRequest request, CancellationToken cancellationToken)
        {
           var result =  await _productReadService.GetByIdAsync(request.Id);
            return new GetProductByIdResponse() { Product = result };
        }
    }
}


