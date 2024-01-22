using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetPersonalAutoListQueryHandler : IRequestHandler<GetPersonalAutoListQuery, PersonalAutoListDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    private readonly ICurrentUserService _currentUserService;

    public GetPersonalAutoListQueryHandler(IApplicationDbContext dbContext, IMapper mapper,
        ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _currentUserService = currentUserService;
    }

    public async Task<PersonalAutoListDto> Handle(GetPersonalAutoListQuery query, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        if (userId == null)
        {
            throw new Exception();
        }

        var result = new PersonalAutoListDto()
        {
            Items = await _dbContext.PersonalAutos
                .Where(auto => auto.UserId == userId)
                .OrderBy(auto => auto.Auto.DistributorName)
                .ProjectTo<PersonalAutoDto>(_mapper.ConfigurationProvider)
                .ToArrayAsync(cancellationToken)
        };

        return result;
    } 
}