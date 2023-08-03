using System.Reflection;

namespace CleanArchitecture.Persistance;

public static class AssemblyReference
{
    public static Assembly Assembly = typeof(Assembly).Assembly;
}
