using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Common.Authorization;

public abstract class AbstractAuthorizer<TRequest> : IAuthorizer<TRequest>
{
    private readonly HashSet<IAuthorizationRequirement> _requirements = new HashSet<IAuthorizationRequirement>();

    public IEnumerable<IAuthorizationRequirement> Requirements => _requirements;

    protected void UseRequirement(IAuthorizationRequirement requirement)
    {
        _requirements.Add(requirement);
    }

    public abstract void BuildPolicy(TRequest request);
}