using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Common.Interfaces;
using ShopExample.Application.Orders.Dto;

namespace ShopExample.Application.Orders.Queries;

public class GetOrderListQueryHandler : IRequestHandler<GetOrderListQuery, OrderListDto>
{

    private readonly IApplicationDbContext _dbContext;
    
    private readonly ICurrentUserService _currentUserService;

    private readonly IMapper _mapper;

    public GetOrderListQueryHandler(IApplicationDbContext dbContext, ICurrentUserService currentUserService, IMapper mapper)
    {
        _dbContext = dbContext;
        _currentUserService = currentUserService;
        _mapper = mapper;
    }

    public async Task<OrderListDto> Handle(GetOrderListQuery query, CancellationToken cancellationToken)
    {
        var userId = _currentUserService.UserId;

        if (userId == null)
        {
            throw new Exception();
        }

        var result = new OrderListDto()
        {
            Items = await _dbContext.Orders
                .Where(order => order.CreatedBy == userId)
                .OrderBy(order => order.Cards.Id)
                .ProjectTo<OrderDto>(_mapper.ConfigurationProvider)
                .ToArrayAsync(cancellationToken)
        };

        return result;
    }
}