using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Auto.Commands;

public class CreateCardCommandHandler : IRequestHandler<CreateCardCommand, CardDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    private readonly ICurrentUserService _currentUserService;

    public CreateCardCommandHandler(IApplicationDbContext dbContext, IMapper mapper, ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _currentUserService = currentUserService;
    }

    public async Task<CardDto> Handle(CreateCardCommand command, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        var personalAuto = await _dbContext.PersonalAutos
            .Where(personalCar => personalCar.Id == command.PersonalAutoId)
            .FirstAsync(cancellationToken);

        if (userId == null || personalAuto == null)
        {
            throw new Exception();
        }

        var card = new Card()
        {
            UserId = userId, 
            PersonalAuto = personalAuto, 
            IsPromoted = false, 
            Price = command.Price
        };

        await _dbContext.Cards.AddAsync(card, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var result = await _dbContext.Cards
            .Where(cardRes => cardRes.Id == card.Id)
            .ProjectTo<CardDto>(_mapper.ConfigurationProvider)
            .FirstAsync(cancellationToken);

        return result;
    }
}