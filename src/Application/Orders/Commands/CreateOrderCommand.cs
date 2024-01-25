using MediatR;
using ShopExample.Application.Orders.Dto;

namespace ShopExample.Application.Orders.Commands;

public class CreateOrderCommand : IRequest<OrderDto>
{
    public int CardId { get; set; }
    
    public required string FullName { get; set; }

    public required string ContactEmail { get; set; }

    public required string Message { get; set; }
}