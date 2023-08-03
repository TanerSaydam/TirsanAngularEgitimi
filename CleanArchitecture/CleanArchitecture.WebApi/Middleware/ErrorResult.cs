using Newtonsoft.Json;

namespace CleanArchitecture.WebApi.Middleware;

public sealed class ErrorResult
{
    public string Message { get; set; }
    public int StatusCode { get; set; }

    public override string ToString()
    {
        return JsonConvert.SerializeObject(this);
    }
}   
