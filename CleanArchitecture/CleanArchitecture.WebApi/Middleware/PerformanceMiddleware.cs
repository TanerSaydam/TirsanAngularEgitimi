using CleanArchitecture.Domain.Models;
using CleanArchitecture.Persistance.Context;
using System.Diagnostics;

namespace CleanArchitecture.WebApi.Middleware;

public sealed class PerformanceMiddleware : IMiddleware
{
    private readonly AppDbContext _context;

    public PerformanceMiddleware(AppDbContext context)
    {
        _context = context;
    }

    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        var stopwatch = new Stopwatch();
        stopwatch.Start();

        DateTime startingDate = DateTime.Now;

        await next(context);
        stopwatch.Stop();

        var performance = new Performance
        {
            MethodName = context.Request.Path.Value,
            StartingDate = startingDate,
            EndingDate = DateTime.Now,
            TransactionTimeInSecond = (int)stopwatch.Elapsed.TotalSeconds,
            TransactionTimeInMilliSeconds = (int)stopwatch.Elapsed.TotalMilliseconds
        };

        await _context.Set<Performance>().AddAsync(performance);
        await _context.SaveChangesAsync();

        if(performance.TransactionTimeInSecond > 1)
        {
            //mail at
            //sms gönder
        }
    }
}
