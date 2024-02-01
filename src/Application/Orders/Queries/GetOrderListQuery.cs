using MediatR;
using ShopExample.Application.Orders.Dto;

namespace ShopExample.Application.Orders.Queries;

public class GetOrderListQuery : IRequest<OrderListDto>
{
    
}