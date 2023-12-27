namespace ShopExample.Domain.Entities;

public class Auto : BaseAuditableEntity
{
    public string DistributorName { get; set; } = string.Empty;
    
    public string Modelname { get; set; } = string.Empty;
    
    public int issueYear { get; set; }
}