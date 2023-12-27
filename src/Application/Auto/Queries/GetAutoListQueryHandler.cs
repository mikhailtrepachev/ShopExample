using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetAutoListQueryHandler : IRequestHandler<GetAutoListQuery, AutoListDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    public GetAutoListQueryHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<AutoListDto> Handle(GetAutoListQuery query, CancellationToken cancellationToken)
    {
        var result = new AutoListDto()
        {
            Items = await _dbContext.Autos
                .OrderBy(d => d.DistributorName)
                .ProjectTo<AutoDto>(_mapper.ConfigurationProvider)
                .ToArrayAsync(cancellationToken)
        };

        return result;
    }
}