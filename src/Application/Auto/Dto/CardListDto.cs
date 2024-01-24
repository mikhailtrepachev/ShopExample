namespace ShopExample.Application.Auto.Dto;

public class CardListDto
{
    public required IEnumerable<CardDto> Items { get; set; }
}