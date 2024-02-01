using ShopExample.Application.Common.Authorization;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Authorization.Requirements;

public class OrderReadRequirementHandler : IAuthorizationHandler<OrderReadRequirement>
{
    private readonly ICurrentUserService _currentUserService;

    public OrderReadRequirementHandler(ICurrentUserService currentUserService)
    {
        _currentUserService = currentUserService;
    }

    public Task<AuthorizationResult> Handle(OrderReadRequirement requirement, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        if (userId == null)
        {
            return Task.FromResult(AuthorizationResult.Fail());

        }

        return Task.FromResult(AuthorizationResult.Succeed());
    }
}