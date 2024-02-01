using ShopExample.Application.Authorization.Requirements;
using ShopExample.Application.Common.Authorization;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Orders.Queries;

public class GetOrderQueryAuthorizer : AbstractRequestAuthorizer<GetOrderQuery>
{
    public override void BuildPolicy(GetOrderQuery request)
    {
        UseRequirement(new OrderReadRequirement());
    }
}