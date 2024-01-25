using ShopExample.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ShopExample.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Domain.Entities.Auto> Autos { get; }
    
    DbSet<PersonalAuto> PersonalAutos { get; }
    
    DbSet<Card> Cards { get; }
    
    DbSet<Order> Orders { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
