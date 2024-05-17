using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceApi.Application.Features.Queries.GetAllProducts
{
    public class GetAllProductQueryResponse
    {
        public int Total { get; set; }
        public Object Products { get; set; }
    }
}
