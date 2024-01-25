using MediatR;
using ShopExample.Application.Orders.Dto;

namespace ShopExample.Application.Orders.Queries;

public class GetOrderQuery : IRequest<OrderDto>
{
    public int Id { get; set; }
}