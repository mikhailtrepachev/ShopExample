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

    [HttpGet("personal/get/{personalAutoId}")]
    public async Task<ActionResult<PersonalAutoDto>> GetPersonalAuto(int personalAutoId)
    {
        var query = new GetPersonalAutoQuery
        {
            Id = personalAutoId
        };

        var result = await Mediator.Send(query);
        return Ok(result);
    }

    [HttpGet("personal/get/list")]
    public async Task<ActionResult<PersonalAutoListDto>> GetPersonalAutoList()
    {
        var query = new GetPersonalAutoListQuery();
        var result = await Mediator.Send(query);
        return Ok(result);
    }

    [HttpGet("card/get/{cardId}")]
    public async Task<ActionResult<CardDto>> GetCard(int cardId)
    {
        var query = new GetCardQuery
        {
            Id = cardId
        };
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

        return CreatedAtAction(nameof(GetCard), new { Id = result.Id }, result);
    }

    [HttpPost("personal/create")]
    public async Task<ActionResult<PersonalAutoDto>> CreatePersonalAuto(CreatePersonalAutoCommandDto commandDto)
    {
        if (commandDto == null)
        {
            return BadRequest();
        }

        var command = new CreatePersonalAutoCommand
        {
            AutoId = commandDto.AutoId,
            Color = commandDto.Color,
            TechnicalState = commandDto.TechnicalState,
            RegistrationNumber = commandDto.RegistrationNumber,
            RegistrationState = commandDto.RegistrationState,
            HorsePower = commandDto.HorsePower,
            WheelSize = commandDto.WheelSize
        };

        var result = await Mediator.Send(command);

        return CreatedAtAction(nameof(GetPersonalAuto), new { Id = result.Id }, result);
    }

    [HttpPost("card/create")]
    public async Task<ActionResult<CardDto>> CreateCard(CreateCardCommandDto commandDto)
    {
        if (commandDto == null)
        {
            return BadRequest();
        }

        var command = new CreateCardCommand
        {
            PersonalAutoId = commandDto.PersonalAutoId,
            Price = commandDto.Price
        };

        var result = await Mediator.Send(command);

        return CreatedAtAction(nameof(GetCard), new { Id = result.Id }, result);
    }

    [HttpDelete("delete/{carId}")]
    public async Task<ActionResult> DeleteCar(int carId)
    {
        var command = new DeleteCarCommand { Id = carId };

        await Mediator.Send(command);

        return NoContent();
    }
}