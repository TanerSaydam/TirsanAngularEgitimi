using CleanArchitecture.Domain.Models;
using CleanArchitecture.Persistance.Context;

namespace CleanArchitecture.WebApi.Middleware;

public sealed class ExceptionMiddleware : IMiddleware
{
    private readonly AppDbContext _context;

    public ExceptionMiddleware(AppDbContext context)
    {
        _context = context;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            await LogExceptionToDatabaseAsync(ex, context.Request);
            await HandleException(context, ex);
        }                      
    }

    public async Task LogExceptionToDatabaseAsync(Exception ex, HttpRequest request)
    {
        //AppDbContext context = new();

        ErrorLog errorLog = new()
        {
            ErrorMessage = ex.Message,
            StackTrace = ex.StackTrace,
            RequestPath = request.Path,
            RequestMethod = request.Method,
            Timestamp = DateTime.Now,           
        };

        await _context.Set<ErrorLog>().AddAsync(errorLog);
        await _context.SaveChangesAsync();
    }

    public Task HandleException(HttpContext context, Exception ex)
    {            
        return context.Response.WriteAsync(new ErrorResult()
        {
            Message = ex.Message,
            StatusCode = 500
        }.ToString()
        );
    }
}
