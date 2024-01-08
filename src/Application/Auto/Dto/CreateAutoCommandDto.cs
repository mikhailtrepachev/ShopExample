namespace ShopExample.Application.Auto.Dto;

public class CreateAutoCommandDto
{
    public required string DistributorName { get; set; }

    public required string ModelName { get; set; }

    public int IssueYear { get; set; }
}