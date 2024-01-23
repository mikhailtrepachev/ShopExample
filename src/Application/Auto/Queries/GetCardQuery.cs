using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Queries;

public class GetCardQuery : IRequest<CardDto>
{
    public int Id { get; set; }
}