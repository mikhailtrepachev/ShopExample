using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Mappings;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Orders.Dto;

public class OrderDto : IMapFrom<Order>
{
    public int Id { get; set; }
    
    public required CardDto Cards { get; set; }

    public required string FullName { get; set; }

    public required string ContactEmail { get; set; }

    public required string Message { get; set; }
}