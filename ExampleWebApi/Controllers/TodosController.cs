using EntityFrameworkCorePagination.Nuget.Pagination;
using ExampleWebApi.Context;
using ExampleWebApi.Dtos;
using ExampleWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExampleWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class TodosController : ControllerBase
{
    AppDbContext context = new();
    [HttpPost("[action]")]
    public async Task<IActionResult> GetAll(RequestDto request, CancellationToken cancellationToken)
    {
        //data : listemiz
        //pageNumber: seçili sayfanın numarası
        //totalPage: toplam sayfa sayısı
        //isFirstPage: ilk sayfa olup olmadığı
        //isLastPage: son sayfa olup olmadığı

        PaginationResult<Todo> result = await context.Set<Todo>()
            .Where(p=> p.Work.ToLower().Contains(request.Search.ToLower()))
            .OrderByDescending(p=> p.CreatedDate)
            .ToPagedListAsync(request.PageNumber, request.PageSize, cancellationToken);

        return Ok(result);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Add(TodoAddDto model, CancellationToken cancellationToken)
    {
        Todo todo = new();
        todo.Work = model.Work;
        todo.IsCompleted = false;
        todo.CreatedDate = DateTime.Now;

        await context.Set<Todo>().AddAsync(todo, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return Ok(new { Message = "Kayıt işlemi başarılı!" });        
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Update(TodoUpdateDto model, CancellationToken cancellationToken)
    {
        Todo todo = await context.Set<Todo>().FindAsync(model.Id, cancellationToken);

        if (todo == null) throw new Exception("Değiştirmek istediğiniz kayıt bulunamadı!");

        todo.Work = model.Work;
        todo.IsCompleted = model.IsCompleted;
        todo.UpdatedDate = DateTime.Now;
        //context.Set<Todo>().Update(todo);   
        await context.SaveChangesAsync(cancellationToken);

        return Ok(new { Message = "Güncelleme işlemi başarıyla tamamlandı!" });
    }

    [HttpGet("[action]/{id}")] //https:localhost:7024/api/Todos/RemoveById/5
    public async Task<IActionResult> RemoveById(int id,CancellationToken cancellationToken)
    {
        Todo todo = await context.Set<Todo>().FindAsync(id, cancellationToken);

        if (todo == null) throw new Exception("Değiştirmek istediğiniz kayıt bulunamadı!");

        context.Set<Todo>().Remove(todo);
        await context.SaveChangesAsync(cancellationToken);

        return Ok(new { Message = "Silme işlemi başarıyla tamamlandı!" });
    }

    [HttpGet("[action]/{id}")]
    public async Task<IActionResult> ChangeIsCompletedById(int id,CancellationToken cancellationToken)
    {
        Todo todo = await context.Set<Todo>().FindAsync(id, cancellationToken);

        if (todo == null) throw new Exception("Değiştirmek istediğiniz kayıt bulunamadı!");

        todo.IsCompleted = !todo.IsCompleted;
        await context.SaveChangesAsync(cancellationToken);
        return Ok(new { Message = "Durum değişikliği işlemi tamamlandı!" });
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> CreateTodos()
    {
        List<Todo> todos = new();

        for (int i = 0; i < 100000; i++)
        {
            Todo todo = new()
            {
                Work = "Deneme " + i,
                IsCompleted = false,
                CreatedDate = DateTime.Now
            };

            todos.Add(todo);
        }

        await context.Set<Todo>().AddRangeAsync(todos);
        await context.SaveChangesAsync();
        return NoContent();
    }
}
