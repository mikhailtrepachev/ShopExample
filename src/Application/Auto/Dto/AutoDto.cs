using ShopExample.Application.Common.Mappings;

namespace ShopExample.Application.Auto.Dto;

public class AutoDto : IMapFrom<Domain.Entities.Auto>
{
    public int Id { get; set; }

    public required string DistributorName { get; set; }

    public required string ModelName { get; set; }

    public int IssueYear { get; set; }
}