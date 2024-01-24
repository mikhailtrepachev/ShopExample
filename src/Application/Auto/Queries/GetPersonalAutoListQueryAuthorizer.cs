﻿using ShopExample.Application.Authorization.Requirements;
using ShopExample.Application.Common.Authorization;

namespace ShopExample.Application.Auto.Queries;

public class GetPersonalAutoListQueryAuthorizer : AbstractAuthorizer<GetPersonalAutoListQuery>
{
    public override void BuildPolicy(GetPersonalAutoListQuery query)
    {
        UseRequirement(new PersonalAutoListReadRequirement());
    }
}