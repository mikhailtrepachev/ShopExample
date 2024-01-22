using AutoMapper;
using ShopExample.Application.Common.Mappings;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Auto.Dto;

public class PersonalAutoDto : IMapFrom<PersonalAuto>
{
    public int Id { get; set; }
    
    public AutoDto? Autos { get; set; }
    
    public Domain.Enums.RegistrationState RegistrationState { get; set; }

    public required string RegistrationNumber { get; set; }

    public Domain.Enums.TechnicalState TechnicalState { get; set; }
    
    public int WheelSize { get; set; }

    public int HorsePower { get; set; }

    public void Mapping(Profile profile)
    {
        profile.CreateMap<PersonalAuto, PersonalAutoDto>()
            .ForMember(s => s.Autos, o => o.MapFrom(d => d.Auto));
    }
}