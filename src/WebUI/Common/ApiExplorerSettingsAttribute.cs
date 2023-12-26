namespace ShopExample.WebUI.Common;

public class ApiExplorerSettingsAttribute : Microsoft.AspNetCore.Mvc.ApiExplorerSettingsAttribute
{
    public bool IgnoreTypes { get; set; }
}