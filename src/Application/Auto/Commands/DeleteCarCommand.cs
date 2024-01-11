using MediatR;

namespace ShopExample.Application.Auto.Commands;

public class DeleteCarCommand : IRequest
{
    public int Id { get; set; }
}