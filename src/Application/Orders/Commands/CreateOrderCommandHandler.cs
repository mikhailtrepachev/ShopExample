using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Common.Interfaces;
using ShopExample.Application.Orders.Dto;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.Orders.Commands;

public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, OrderDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    private readonly ICurrentUserService _currentUserService;

    public CreateOrderCommandHandler(IApplicationDbContext dbContext, IMapper mapper, ICurrentUserService currentUserService)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _currentUserService = currentUserService;
    }

    public async Task<OrderDto> Handle(CreateOrderCommand command, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        var card = await _dbContext.Cards
            .Where(card => card.Id == command.CardId)
            .FirstOrDefaultAsync(cancellationToken);

        if (userId == null || card == null)
        {
            throw new Exception();
        }

        var order = new Order()
        {
            Cards = card,
            Message = command.Message,
            ContactEmail = command.ContactEmail,
            FullName = command.FullName
        };

        await _dbContext.Orders.AddAsync(order, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);

        var result = await _dbContext.Orders
            .Where(orderData => orderData.Id == order.Id)
            .ProjectTo<OrderDto>(_mapper.ConfigurationProvider)
            .FirstAsync(cancellationToken);

        return result;
    }
}