using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Authorization.Requirements;

public class OrderReadRequirement : IAuthorizationRequirement
{
    public int Id { get; set; }
}