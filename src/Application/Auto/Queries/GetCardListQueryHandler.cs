using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetCardListQueryHandler : IRequestHandler<GetCardListQuery, CardListDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    public GetCardListQueryHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<CardListDto> Handle(GetCardListQuery query, CancellationToken cancellationToken)
    {
        var result = new CardListDto()
        {
            Items = await _dbContext.Cards
                .OrderBy(card => card.PersonalAuto)
                .ProjectTo<CardDto>(_mapper.ConfigurationProvider)
                .ToArrayAsync(cancellationToken)
        };

        return result;
    }
}