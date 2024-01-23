using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetCardQueryHandler : IRequestHandler<GetCardQuery, CardDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;
    
    public GetCardQueryHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<CardDto> Handle(GetCardQuery query, CancellationToken cancellationToken)
    {
        var result = await _dbContext.Cards
            .Where(card => card.Id == query.Id)
            .ProjectTo<CardDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(cancellationToken);

        if (result == null)
        {
            throw new Exception();
        }

        return result;
    }
}