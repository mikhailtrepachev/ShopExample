using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Commands;

public class CreateCardCommand : IRequest<CardDto>
{
    public required int PersonalAutoId { get; set; }
    
    public int Price { get; set; }
    
}