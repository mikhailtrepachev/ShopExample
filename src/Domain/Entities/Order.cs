namespace ShopExample.Domain.Entities;

public class Order : BaseAuditableEntity
{
    public required Card Cards { get; set; }

    public required string FullName { get; set; }

    public required string ContactEmail { get; set; }

    public required string Message { get; set; }
}