using ShopExample.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ShopExample.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }
    
    DbSet<Domain.Entities.Auto> Autos { get; }
    
    DbSet<PersonalAuto> PersonalAutos { get; }
    
    DbSet<Card> Cards { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
