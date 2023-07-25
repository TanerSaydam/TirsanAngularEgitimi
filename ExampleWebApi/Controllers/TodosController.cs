using ExampleWebApi.Context;
using ExampleWebApi.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExampleWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class TodosController : ControllerBase
{
    AppDbContext context = new();
    [HttpGet("[action]")]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        IList<Todo> todos = await context.Set<Todo>().ToListAsync(cancellationToken);
        return Ok(todos);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Add(TodoAddDto model, CancellationToken cancellationToken)
    {
        Todo todo = new();
        todo.Work = model.Work;
        todo.IsCompleted = false;
        todo.CreatedDate = DateTime.Now;

        await context.Set<Todo>().AddAsync(todo,cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return Ok(new { Message = "Kayıt işlemi başarılı!" });
    }
}
