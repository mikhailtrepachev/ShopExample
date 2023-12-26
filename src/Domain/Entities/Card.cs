namespace CleanArchitecture.Domain.Entities;

public class Card : BaseAuditableEntity
{
    // TODO: Seller

    public PersonalAuto PersonalAuto { get; set; } = new PersonalAuto(); // ???
    
    public int Price { get; set; }
    
    // TODO: dateOfCreating ?

    public bool IsPromoted { get; set; }
    
    // TODO: Image -> localstorage
    
    // TODO: User.Number
}