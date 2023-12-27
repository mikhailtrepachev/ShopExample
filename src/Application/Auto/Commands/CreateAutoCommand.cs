using MediatR;
using ShopExample.Application.Auto.Dto;

namespace ShopExample.Application.Auto.Commands;

public class CreateAutoCommand : IRequest<AutoDto>
{
    public required string DistributorName { get; set; }

    public required string ModelName { get; set; }

    public int IssueYear { get; set; }
}