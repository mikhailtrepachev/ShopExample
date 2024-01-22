using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Commands;

public class CreatePersonalAutoCommand : IRequest<PersonalAutoDto>
{
    public required int AutoId { get; set; }
    
    public Domain.Enums.Colors Color { get; set; }

    public Domain.Enums.RegistrationState RegistrationState { get; set; }

    public required string RegistrationNumber { get; set; }

    public Domain.Enums.TechnicalState TechnicalState { get; set; }

    public int WheelSize { get; set; }

    public int HorsePower { get; set; }
}