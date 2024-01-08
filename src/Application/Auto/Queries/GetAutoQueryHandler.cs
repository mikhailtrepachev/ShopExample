using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetAutoQueryHandler : IRequestHandler<GetAutoQuery, AutoDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    public GetAutoQueryHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<AutoDto> Handle(GetAutoQuery query, CancellationToken cancellationToken)
    {
        var autoDto = await _dbContext.Autos
            .Where(auto => auto.Id == query.Id)
            .ProjectTo<AutoDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(cancellationToken);

        if (autoDto == null)
        {
            throw new Exception();
        }

        return autoDto;
    }
}