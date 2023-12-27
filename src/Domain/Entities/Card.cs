namespace ShopExample.Domain.Entities;

public class Card : BaseAuditableEntity
{
    // TODO: Seller

    public required PersonalAuto PersonalAuto { get; set; }
    
    public int Price { get; set; }
    
    // TODO: dateOfCreating ?

    public bool IsPromoted { get; set; }
    
    // TODO: Image -> localstorage
    
    // TODO: User.Number
}