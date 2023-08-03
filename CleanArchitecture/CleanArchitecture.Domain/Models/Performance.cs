using CleanArchitecture.Domain.Abstractions;

namespace CleanArchitecture.Domain.Models;

public sealed class Performance : Entity
{
    public string MethodName { get; set; }
    public DateTime StartingDate { get; set; }
    public DateTime EndingDate { get; set;}
    public int TransactionTimeInSecond { get; set; }
    public int TransactionTimeInMilliSeconds { get; set; }
}
