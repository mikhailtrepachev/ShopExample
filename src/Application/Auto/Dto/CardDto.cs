using ShopExample.Application.Common.Mappings;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Auto.Dto;

public class CardDto : IMapFrom<Card>
{
    public int Id { get; set; }
    
    public required PersonalAutoDto PersonalAuto { get; set; }
    
    public int Price { get; set; }

    public string? Description { get; set; }
    
    public bool IsPromoted { get; set; }
}