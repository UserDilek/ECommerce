using ECommerceApi.Application.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceApi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductWriteRepository _productWriteService;
        private readonly IProductReadRepository _productReadService;
        public ProductController(IProductWriteRepository productWriteService,IProductReadRepository productReadService)
        {
            _productWriteService = productWriteService;
            _productReadService = productReadService;
        }

        [HttpGet]
        [Route("/getProduct")]
        public async Task<IActionResult> GetProduct()
        {
            await _productWriteService.AddRangeAsync(new()
                {
                    new(){Id = Guid.NewGuid(), Name="Product 1" , Price=100 , Stock = 50 , CreatedDate = DateTime.UtcNow},
                    new(){Id = Guid.NewGuid(), Name="Product 3" , Price=100 , Stock = 50 , CreatedDate = DateTime.UtcNow},
                    new(){Id = Guid.NewGuid(), Name="Product 3" , Price=100 , Stock = 50 , CreatedDate =DateTime.UtcNow}
                });
            await _productWriteService.SaveChangesAsync();

            return Ok(); 
        }
        [HttpGet]
        [Route("getAllProduct")]
        public IActionResult GetAllProducts()
        {
            var products = _productReadService.GetAll();
            return Ok(products);
        }

    }
}   
