using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Queries;

public class GetPersonalAutoQuery : IRequest<PersonalAutoDto>
{
    public int Id { get; set; }
}