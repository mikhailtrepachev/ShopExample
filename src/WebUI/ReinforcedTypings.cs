
using System.Reflection;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Reinforced.Typings.Ast.TypeNames;
using Reinforced.Typings.Fluent;

namespace ShopExample.WebUI;

public class ReinforcedTypings
{
    private const string RootNamespace = "ShopExample";
    private const string TypingsRootNamespace = "ShopExample.Application";

    public static void ConfigureTypings(Reinforced.Typings.Fluent.ConfigurationBuilder builder)
    {
        builder.Global(configuration =>
        {
            configuration.CamelCaseForProperties();
            configuration.CamelCaseForMethods();
            configuration.UseModules();
            configuration.TabSymbol("  ");
            configuration.DontWriteWarningComment();
        });

        builder.Substitute(typeof(Guid), new RtSimpleTypeName("string"));
        builder.Substitute(typeof(DateTime), new RtSimpleTypeName("string"));

        var controllers = builder.Context.SourceAssemblies
            .SelectMany(assembly => assembly.GetTypes().Where(type =>
                !type.IsAbstract && Attribute.IsDefined(type, typeof(ApiControllerAttribute)) &&
                !(type.GetCustomAttribute<WebUI.Common.ApiExplorerSettingsAttribute>()?.IgnoreTypes ?? false)
            ));

        var types = new List<Type>();

        foreach (var controller in controllers)
        {
            var methods =
                controller.GetMethods(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.Instance);

            foreach (var method in methods)
            {
                var methodTypes = method.GetParameters()
                    .Select(parameter => parameter.ParameterType)
                    .Union(new[] { method.ReturnType });

                foreach (var methodType in methodTypes)
                {
                    types.AddRange(GetTypes(methodType, types));
                }
            }
        }
        
        Action<TypeExportBuilder> configurateTypeExport = (options) =>
        {            
            var kebabCaseRegex = new Regex("(?<!^)([A-Z][a-z]|(?<=[a-z])[A-Z])", RegexOptions.Compiled);

            var directory = "";
            if (options.Type.Namespace.StartsWith(TypingsRootNamespace + "."))
            {
                directory = String.Join(Path.DirectorySeparatorChar, options.Type.Namespace
                    .Substring(TypingsRootNamespace.Length + 1)
                    .Replace(".Commands", "")
                    .Replace(".Queries.Dtos", "")
                    .Replace(".Dto", "")
                    .Split(".", StringSplitOptions.RemoveEmptyEntries)
                    .Select(directory => kebabCaseRegex.Replace(directory, "-$1").Trim().ToLower()));
            }
            var fileName = kebabCaseRegex.Replace(options.Type.Name, "-$1").Trim().ToLower() + ".model.ts";
            options.ExportTo(Path.Combine(directory, fileName));
        };
        
        builder.ExportAsInterfaces(
            types.Where(t => !t.IsEnum),
            opt =>
            {
                configurateTypeExport(opt);
                opt.AutoI(false);
                opt.WithPublicProperties();
            });

        builder.ExportAsEnums(
            types.Where(t => t.IsEnum),
            opt =>
            {
                configurateTypeExport(opt);
            });
    }

    private static IEnumerable<Type> GetTypes(Type type, IEnumerable<Type> excludedTypes = null)
    {
        var result = new List<Type>();
        excludedTypes = excludedTypes ?? new Type[0];

        if (type.IsGenericType)
        {
            var arguments = type.GetGenericArguments();
            foreach (var argument in arguments)
            {
                var argumentTypes = GetTypes(argument, excludedTypes);
                result.AddRange(argumentTypes);
            }
        }
        else if (type.IsArray)
        {
            var elementTypes = GetTypes(type.GetElementType(), excludedTypes);
            result.AddRange(elementTypes);
        }
        else if (type.Namespace.Equals(RootNamespace) || type.Namespace.StartsWith(RootNamespace + "."))
        {
            if (excludedTypes.Contains(type) != true)
            {
                result.Add(type);
                var excludedTypeList = excludedTypes.ToList();
                excludedTypeList.Add(type);

                var properties = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public
                                                                              | BindingFlags.Instance);
                foreach (var property in properties)
                {
                    var propertyTypes = GetTypes(property.PropertyType, excludedTypeList);
                    result.AddRange(propertyTypes);
                    excludedTypeList.AddRange(propertyTypes);
                }
            }
        }

        return result.ToArray();
    }
}