using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Auto.Commands;

public class CreatePersonalAutoCommandHandler : IRequestHandler<CreatePersonalAutoCommand, PersonalAutoDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly ICurrentUserService _currentUserService;

    private readonly IMapper _mapper;

    public CreatePersonalAutoCommandHandler(IApplicationDbContext dbContext, IMapper mapper,
        ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _currentUserService = currentUserService;
    }

    public async Task<PersonalAutoDto> Handle(CreatePersonalAutoCommand request, CancellationToken cancellationToken)
    {
        var auto = await _dbContext.Autos.Where(car => car.Id == request.AutoId)
            .FirstOrDefaultAsync(cancellationToken);

        var userId = _currentUserService.UserId; 
        
        if (auto == null || userId == null)
        {
            throw new Exception("Auto or user not found.");
        }
        
        var personalAuto = new PersonalAuto
        {
            TechnicalState = request.TechnicalState,
            WheelSize = request.WheelSize,
            Color = request.Color,
            Auto = auto,
            UserId = userId,
            RegistrationNumber = request.RegistrationNumber,
            RegistrationState = request.RegistrationState,
            HorsePower = request.HorsePower,
        };
        
        await _dbContext.PersonalAutos.AddAsync(personalAuto, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var result = await _dbContext.PersonalAutos
            .Where(car => car.Id == personalAuto.Id && car.UserId == userId)
            .ProjectTo<PersonalAutoDto>(_mapper.ConfigurationProvider)
            .FirstOrDefaultAsync(cancellationToken);

        if (result == null)
        {
            throw new Exception();
        }
        
        return result;
    }
}