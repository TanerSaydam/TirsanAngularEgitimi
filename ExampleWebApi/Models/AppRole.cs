﻿using Microsoft.AspNetCore.Identity;

namespace ExampleWebApi.Models;

public sealed class AppRole : IdentityRole<string>
{
    public string Title { get; set; }
    public string Section { get; set; }
}
