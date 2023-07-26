using Newtonsoft.Json;

namespace ExampleWebApi.Middlewares;

public class ErrorStatusCode
{
    public int StatusCode { get; set; }
    public override string ToString()
    {
        return JsonConvert.SerializeObject(this);
    }
}
public sealed class ErrorResult: ErrorStatusCode
{    
    public string Message { get; set; }    
}

public sealed class ValidationErrorDetails : ErrorStatusCode
{    
    public IEnumerable<string> Errors { get; set; } 
}
