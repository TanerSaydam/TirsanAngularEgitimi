using ExampleWebApi.Context;
using ExampleWebApi.Dtos;
using ExampleWebApi.Models;
using GenericFileService.Files;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace ExampleWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes ="Bearer")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Add([FromForm] ProductAddDto request, CancellationToken cancellationToken)
        {
            string filePath = @"C:\Tırsan Angular Eğitimi\my-theme-app\src\assets\files\";
            string fileName = FileService.FileSaveToServer(request.MainImage,filePath);

            Product product = new()
            {                
                Name = request.Name,
                Price = request.Price,
                Stock = request.Stock,
                MainImageUrl = fileName,
            };
            await _context.Products.AddAsync(product, cancellationToken);

            if (request.Images != null && request.Images.Count() > 0)
            {
                List<ProductImage> productImages = new();
                foreach (var image in request.Images)
                {
                    fileName = FileService.FileSaveToServer(image, filePath);

                    ProductImage productImage = new()
                    {
                        ImageUrl = fileName,
                        ProductId = product.Id
                    };

                    productImages.Add(productImage);
                }

                await _context.ProductImages.AddRangeAsync(productImages, cancellationToken);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Ok(new { Message="Product kaydı başarılı!"});
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
        {
            IList<Product> products = await _context.Products.AsNoTracking().Include(p=> p.ProductImages).OrderBy(p => p.Name).ToListAsync(cancellationToken);
            return Ok(products);            
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetById(string id, CancellationToken cancellationToken)
        {
            Product product = 
                await _context.Products
                .Where(p=> p.Id == Guid.Parse(id))
                .AsNoTracking()
                .Include(p=> p.ProductImages)
                .FirstOrDefaultAsync(cancellationToken);
            return Ok(product);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Update([FromForm] ProductUpdateDto request, CancellationToken cancellationToken)
        {
            string filePath = @"C:\Tırsan Angular Eğitimi\my-theme-app\src\assets\files\";
            Product product = await _context.Products.Where(p => p.Id == Guid.Parse(request.Id)).Include(p=> p.ProductImages).FirstOrDefaultAsync(cancellationToken);

            foreach (var image in product.ProductImages)
            {
                FileService.FileDeleteToServer(filePath + image.ImageUrl);
            }

            product.Name = request.Name;
            product.Stock = request.Stock;
            product.Price = request.Price;
            //Product Images kısmı düzeltilecek
            if(request.MainImage != null){
                FileService.FileDeleteToServer(filePath + product.MainImageUrl);
                string fileName = FileService.FileSaveToServer(request.MainImage, filePath);
                product.MainImageUrl = fileName;
            }            

            foreach (var image in request.Images)
            {
                string fileName = FileService.FileSaveToServer(image, filePath);
                ProductImage productImage = new()
                {
                    ImageUrl = fileName,
                    ProductId = product.Id
                };
                product.ProductImages.Add(productImage);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Ok(new { Message = "Ürün başarıyla güncellendi!" });
        }
    }
}
