namespace ShopExample.Domain.Entities;

public class PersonalAuto : BaseAuditableEntity
{
    public required Auto Auto { get; set; }

    public required string UserId { get; set; }
    
    public Domain.Enums.Colors Color { get; set; }

    public Domain.Enums.RegistrationState RegistrationState { get; set; }

    public required string RegistrationNumber { get; set; }

    public Domain.Enums.TechnicalState TechnicalState { get; set; }

    public int WheelSize { get; set; }

    public int HorsePower { get; set; }
}