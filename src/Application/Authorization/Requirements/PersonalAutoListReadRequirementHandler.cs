﻿using ShopExample.Application.Common.Authorization;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Authorization.Requirements;

public class PersonalAutoListReadRequirementHandler : IAuthorizationHandler<PersonalAutoListReadRequirement>
{
    private readonly ICurrentUserService _currentUserService;

    public PersonalAutoListReadRequirementHandler(ICurrentUserService currentUserService)
    {
        _currentUserService = currentUserService;
    }

    public async Task<AuthorizationResult> Handle(PersonalAutoListReadRequirement requirement,
        CancellationToken cancellationToken)
    {
        return AuthorizationResult.Succeed();
    }
}