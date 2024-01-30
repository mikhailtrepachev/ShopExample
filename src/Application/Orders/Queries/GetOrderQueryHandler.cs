using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using ShopExample.Application.Common.Interfaces;
using ShopExample.Application.Common.Models;
using ShopExample.Application.Orders.Dto;

namespace ShopExample.Application.Orders.Queries;

public class GetOrderQueryHandler : IRequestHandler<GetOrderQuery, OrderDto>
{
    private readonly IApplicationDbContext _dbContext;

    private readonly IMapper _mapper;

    public GetOrderQueryHandler(IApplicationDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<OrderDto> Handle(GetOrderQuery query, CancellationToken cancellationToken)
    {
        var result = await _dbContext.Orders
            .Where(order => order.Id == query.Id)
            .ProjectTo<OrderDto>(_mapper.ConfigurationProvider)
            .FirstAsync(cancellationToken);

        if (result == null)
        {
            throw new Exception();
        }

        return result;
    }
}