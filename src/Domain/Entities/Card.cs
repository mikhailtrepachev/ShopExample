namespace ShopExample.Domain.Entities;

public class Card : BaseAuditableEntity
{
    public required string UserId { get; set; }
        
    public required PersonalAuto PersonalAuto { get; set; }
    
    public int Price { get; set; }
    
    public bool IsPromoted { get; set; }
    
    // TODO: Image -> localstorage
    
    // TODO: User.Number
}