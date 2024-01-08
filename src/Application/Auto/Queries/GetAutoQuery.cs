using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Queries;

public class GetAutoQuery : IRequest<AutoDto>
{
    public int Id { get; set; }
}