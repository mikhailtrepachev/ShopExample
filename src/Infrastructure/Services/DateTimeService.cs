using CleanArchitecture.Application.Common.Interfaces;

namespace ShopExample.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
