using ECommerceApi.Application.Repositories;
using ECommerceApi.Application.RequestParameters;
using MediatR;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Features.Queries.GetAllProducts
{
    public class GetAllProductQueryHandler : IRequestHandler<GetAllProductQueryRequest, GetAllProductQueryResponse>
    {
        private readonly IProductReadRepository _productReadService;
        public GetAllProductQueryHandler(IProductReadRepository productReadService)
        {
            _productReadService = productReadService;
        }
        public async Task<GetAllProductQueryResponse> Handle(GetAllProductQueryRequest request, CancellationToken cancellationToken)
        {
            var total = _productReadService.GetAll(false).Count();

            var products = _productReadService.GetAll(false).Select(p => new
            {
                p.Id,
                p.Name,
                p.Stock,
                p.Price,
                p.CreatedDate,
                p.UpdatedDate
            }).Skip(request.Pagination.Page * request.Pagination.PageSize).Take(request.Pagination.PageSize);

            return new GetAllProductQueryResponse() { Products=products,Total =  total};
        }
    }
}
