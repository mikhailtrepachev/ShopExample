namespace ShopExample.Domain.Entities;

public class Auto : BaseAuditableEntity
{
    public required string DistributorName { get; set; }
    
    public required string ModelName { get; set; }
    
    public int IssueYear { get; set; }
}