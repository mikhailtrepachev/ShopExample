using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using ShopExample.Application.Common.Interfaces;

namespace ShopExample.Application.Common.Authorization;

public static class AuthorizerExtensions
{
    public static void AddAuthorizersFromAssembley(
        this IServiceCollection services,
        Assembly assembly,
        ServiceLifetime lifetime = ServiceLifetime.Scoped)
    {
        var typeInfoList = assembly.DefinedTypes
            .Where(x => x.IsClass
                        && !x.IsAbstract
                        && x != typeof(IAuthorizer<>)
                        && x.GetInterfaces().Any(i => i.IsGenericType &&
                                                      i.GetGenericTypeDefinition() == typeof(IAuthorizer<>))).ToArray();

        foreach (var typeInfo in typeInfoList)
        {
            foreach (var implementedInterface in typeInfo.ImplementedInterfaces)
            {
                switch (lifetime)
                {
                    case ServiceLifetime.Scoped: 
                        services.AddScoped(implementedInterface, typeInfo); 
                        break; 
                    case ServiceLifetime.Singleton: 
                        services.AddSingleton(implementedInterface, typeInfo); 
                        break; 
                    case ServiceLifetime.Transient: 
                        services.AddTransient(implementedInterface, typeInfo); 
                        break;
                }
            }
        }
    }
}