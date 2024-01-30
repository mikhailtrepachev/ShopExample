using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ShopExample.Application.Orders.Commands;
using ShopExample.Application.Orders.Dto;
using ShopExample.Application.Orders.Queries;

namespace ShopExample.WebUI.Controllers.Public;

[Microsoft.AspNetCore.Components.Route("api/order")]
public class OrderController : ApiControllerBase
{
    [HttpGet("{orderId}")]
    public async Task<ActionResult<OrderDto>> Get(int orderId)
    {
        var query = new GetOrderQuery { Id = orderId };
        
        var result = await Mediator.Send(query);
        
        return result;
    }
        
    [HttpPost]
    public async Task<ActionResult<OrderDto>> Create(CreateOrderCommandDto commandDto)
    {
        if (commandDto == null)
        {
            return BadRequest();
        }

        var command = new CreateOrderCommand
        {
            CardId = commandDto.CardId,
            ContactEmail = commandDto.ContactEmail,
            FullName = commandDto.FullName,
            Message = commandDto.Message
        };

        var result = await Mediator.Send(command);

        return CreatedAtAction(nameof(Get), new { Id = result.Id }, result);
    }
}