using FluentValidation;

namespace ExampleWebApi.Middlewares;

public class ExceptionMiddleware : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
			try
			{
				await next(context);
			}
			catch (Exception ex)
			{
				await HandleExceptionAsync(context, ex);
			}
    }

		private Task HandleExceptionAsync(HttpContext context, Exception exception)
		{
			context.Response.ContentType = "application/json";
			context.Response.StatusCode = 500;

		if (exception.GetType() == typeof(ValidationException))
		{
			return context.Response.WriteAsync(new ValidationErrorDetails
			{
				Errors = ((ValidationException)exception).Errors.Select(s => s.PropertyName),
				StatusCode = 403
			}.ToString());
	    }

		return context.Response.WriteAsync(new ErrorResult
			{
				Message = exception.Message,
				StatusCode = context.Response.StatusCode
			}.ToString());
		}
}
