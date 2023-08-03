using CleanArchitecture.Domain.Models;
using CleanArchitecture.Persistance.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Presentation.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    private readonly AppDbContext _context;

    public HomeController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("[action]")]    
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        int x = 0;
        int y = 0;
        //int z = x / y;
        Thread.Sleep(1000);
        return Ok(new { Message = "Value"});
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetAllErrorMessage(CancellationToken cancellationToken)
    {
        List<ErrorLog> errors = await _context.Set<ErrorLog>().ToListAsync(cancellationToken);
        return Ok(errors);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetAllPerformace(CancellationToken cancellationToken)
    {
        List<Performance> performances = await _context.Set<Performance>().ToListAsync(cancellationToken);
        return Ok(performances);
    }
}
