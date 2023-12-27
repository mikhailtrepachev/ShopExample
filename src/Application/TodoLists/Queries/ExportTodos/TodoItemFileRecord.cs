using ShopExample.Application.Common.Mappings;
using ShopExample.Domain.Entities;

namespace ShopExample.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; init; }

    public bool Done { get; init; }
}
