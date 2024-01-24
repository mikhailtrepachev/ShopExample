using MediatR;
using ShopExample.Application.Common.Authorization;

namespace ShopExample.Application.Common.Interfaces;

public interface IAuthorizationRequirement : IRequest<AuthorizationResult>
{
    
}