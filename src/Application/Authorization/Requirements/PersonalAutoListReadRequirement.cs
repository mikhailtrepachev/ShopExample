using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Authorization.Requirements
{
    public class PersonalAutoListReadRequirement : IAuthorizationRequirement
    {
        public int Int { get; set; }
    }
}