using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ShopExample.Application.Auto.Commands;
using ShopExample.Application.Auto.Dto;
using ShopExample.Application.Auto.Queries;
using Microsoft.AspNetCore.Http;

namespace ShopExample.WebUI.Controllers.Public;

[Route("api/autos")]
public class AutoController : ApiControllerBase
{
    [HttpGet("{autoId}")]
    public async Task<ActionResult<AutoDto>> Get(int autoId)
    {
        var query = new GetAutoQuery
        {
            Id = autoId
        };

        var result = await Mediator.Send(query);
        return Ok(result);
    }
    
    [HttpGet("list")]
    public async Task<ActionResult<AutoListDto>> GetList()
    {
        var query = new GetAutoListQuery();
        var result = await Mediator.Send(query);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<AutoDto>> Create(CreateAutoCommandDto commandDto)
    {
        if (commandDto == null)
        {
            return BadRequest();
        }

        var command = new CreateAutoCommand
        {
            DistributorName = commandDto.DistributorName,
            ModelName = commandDto.ModelName,
            IssueYear = commandDto.IssueYear
        };

        var result = await Mediator.Send(command);

        return CreatedAtAction(nameof(Get), new { Id = result.Id }, result);
    }

    [HttpPost]
    public async Task<ActionResult<PersonalAutoDto>> CreatePersonalAuto(CreatePersonalAutoCommandDto commandDto)
    {
        
    }

    [HttpDelete("delete/{carId}")]
    public async Task<ActionResult> DeleteCar(int carId)
    {
        var command = new DeleteCarCommand { Id = carId };

        await Mediator.Send(command);

        return NoContent();
    }
}