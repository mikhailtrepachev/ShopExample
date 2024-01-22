using AutoMapper;
using AutoMapper.QueryableExtensions;
using ShopExample.Application.Auto.Dto;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Queries;

public class GetPersonalAutoQueryHandler : IRequestHandler<GetPersonalAutoQuery, PersonalAutoDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    private readonly ICurrentUserService _currentUserService;

    public GetPersonalAutoQueryHandler(IApplicationDbContext dbContext, IMapper mapper,
        ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _currentUserService = currentUserService;
    }

    public async Task<PersonalAutoDto> Handle(GetPersonalAutoQuery query, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        if (userId == null)
        {
            throw new Exception();
        }
        
        var perosnalAuto = await _dbContext.PersonalAutos
            .Where(personalAuto => personalAuto.Id == query.Id && personalAuto.UserId == userId)
            .ProjectTo<PersonalAutoDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(cancellationToken);

        if (perosnalAuto == null)
        {
            throw new Exception();
        }
        
        return perosnalAuto;
    }
}