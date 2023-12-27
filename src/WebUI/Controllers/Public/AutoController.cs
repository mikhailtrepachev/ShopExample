using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Auto.Queries;

namespace ShopExample.WebUI.Controllers.Public;

[Route("api/autos")]
public class AutoController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult<AutoListDto>> GetAutoList()
    {
        var query = new GetAutoListQuery();
        var result = await Mediator.Send(query);
        return Ok(result);
    }
}