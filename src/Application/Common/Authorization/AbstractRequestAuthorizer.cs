﻿using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Common.Authorization;

public abstract class AbstractRequestAuthorizer<TRequest> : IAuthorizer<TRequest>
{
    private HashSet<IAuthorizationRequirement> _requirements = new HashSet<IAuthorizationRequirement>();

    public IEnumerable<IAuthorizationRequirement> Requirements => _requirements;

    protected void UseRequirement(IAuthorizationRequirement requirement)
    {
        if (requirement == null) return;
        _requirements.Add(requirement);
    }

    public abstract void BuildPolicy(TRequest request);
}