namespace ShopExample.Application.Orders.Dto;

public class CreateOrderCommandDto
{
    public required int CardId { get; set; }
    
    public required string FullName { get; set; }

    public required string ContactEmail { get; set; }

    public required string Message { get; set; }
}