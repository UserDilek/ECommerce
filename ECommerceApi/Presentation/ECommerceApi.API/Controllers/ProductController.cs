using ECommerceApi.Application.Repositories;
using ECommerceApi.Domain.Entities;
using ECommerceApi.Application.ViewModels;
using Microsoft.AspNetCore.Mvc;
using ECommerceApi.Application.RequestParameters;
using ECommerceApi.Application.Services;
using MediatR;
using ECommerceApi.Application.Features.Queries.GetAllProducts;
using ECommerceApi.Application.Features.Queries.GetProductById;
using ECommerceApi.Application.Features.Commands.Product.CreateProduct;
using ECommerceApi.Application.Features.Commands.Product.UpdateProduct;
using ECommerceApi.Application.Features.Commands.Product.RemoveProduct;

namespace ECommerceApi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IFileService _fileService;
        private readonly IMediator _mediatr;
        public ProductController(IWebHostEnvironment webHostEnvironment
            , IFileService fileService, IMediator mediatr)
        {
            _webHostEnvironment = webHostEnvironment;
            _fileService = fileService;
            _mediatr = mediatr;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts([FromQuery] GetAllProductQueryRequest request)
        {
            var response = await _mediatr.Send(request);
            return Ok(response);
        }

        [HttpGet("/{id}")]
        public async Task<IActionResult> GetProductById(string id)
        {
            var response = await _mediatr.Send(new GetProductByIdRequest() { Id = id });
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct(CreateProductRequest createProductRequest)
        {

            await _mediatr.Send(createProductRequest);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProducts(UpdateProductRequest updateProductRequest)
        {
            await _mediatr.Send(updateProductRequest);
            return Ok(updateProductRequest);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] string id)
        {
            await _mediatr.Send(new RemoveProductRequest() { Id = id });
            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload(List<IFormFile> files)
        {
            var allFilesWithPaths = await _fileService.UploadAsync("resoruces\\product-images", Request.Form.Files);
            return Ok();
        }

    }
}
