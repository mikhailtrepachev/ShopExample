using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Commands;

public class CreateAutoCommandHandler : IRequestHandler<CreateAutoCommand, AutoDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    public CreateAutoCommandHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<AutoDto> Handle(CreateAutoCommand request, CancellationToken cancellationToken)
    {
        var auto = new Domain.Entities.Auto
        {
            DistributorName = request.DistributorName,
            ModelName = request.ModelName,
            IssueYear = request.IssueYear
        };

        await _dbContext.Autos.AddAsync(auto, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var result = await _dbContext.Autos
            .Where(properties => properties.Id == auto.Id)
            .ProjectTo<AutoDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(cancellationToken);

        return result;
    }
}