using MediatR;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Auto.Commands;

public class DeleteCarCommandHandler : IRequestHandler<DeleteCarCommand>
{
    private readonly IApplicationDbContext _dbContext;

    public DeleteCarCommandHandler(IApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task Handle(DeleteCarCommand request, CancellationToken cancellationToken)
    {
        var car = await _dbContext.Autos.FindAsync(new object[] { request.Id }, cancellationToken);

        if (car == null)
        {
            throw new Exception(); //TODO: create a custom exception for NotFounded exceptions
        }

        _dbContext.Autos.Remove(car);
        await _dbContext.SaveChangesAsync(cancellationToken);
    }
    
}