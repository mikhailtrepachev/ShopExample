namespace ShopExample.Application.Auto.Dto;

public class CreateCardCommandDto
{
    public required int PersonalAutoId { get; set; }
    
    public int Price { get; set; }

    public string? Description { get; set; }
    
    public bool IsPromoted { get; set; }
}