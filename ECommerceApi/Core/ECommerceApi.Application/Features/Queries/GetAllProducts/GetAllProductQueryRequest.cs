using ECommerceApi.Application.RequestParameters;
using MediatR;

namespace ECommerceApi.Application.Features.Queries.GetAllProducts
{
    public class GetAllProductQueryRequest:IRequest<GetAllProductQueryResponse>
    {
        public Pagination Pagination { get; set; }
    }
}
