namespace CleanArchitecture.Domain.Entities;

public class PersonalAuto : BaseAuditableEntity
{
    public Auto Auto { get; set; } = new Auto(); //???

    public Domain.Enums.Colors Color { get; set; }

    public Domain.Enums.RegistrationState RegistrationState { get; set; }

    public string RegistrationNumber { get; set; } = string.Empty;

    public Domain.Enums.TechnicalState TechnicalState { get; set; }

    public int WheelSize { get; set; }

    public int HorsePower { get; set; }
}