using MediatR;
using ShopExample.Application.Common.Authorization;

namespace ShopExample.Application.Common.Interfaces;

public interface IAuthorizationHandler<TRequest> : IRequestHandler<TRequest, AuthorizationResult>
    where TRequest : IRequest<AuthorizationResult>
{
    
}