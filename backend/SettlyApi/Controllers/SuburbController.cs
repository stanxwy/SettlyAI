using ISettlyService;
using Microsoft.AspNetCore.Mvc;
using SettlyModels;
using SettlyModels.Dtos;

namespace SettlyApi.Controllers

{
    [ApiController]
    [Route("api/[controller]/{id:int}")]
    public class SuburbController : ControllerBase
    {
        private readonly ISuburbService _suburbService;

        public SuburbController(ISuburbService suburbService)
        {
            _suburbService = suburbService;

        }

        [HttpGet]
        public async Task<ActionResult<SuburbDto>> GetById(int id)
        {
            var suburb = await _suburbService.GetSuburbsByIdAsync(id);
            return Ok(suburb);
        }

        [HttpGet("income")]
        public async Task<ActionResult<SuburbDto>> GetIncome(int id)
        {
            return Ok();
        }

        [HttpGet("market")]
        public async Task<ActionResult<SuburbDto>> GetMarket(int id)
        {
            return Ok();
        }

        [HttpGet("demand-development")]
        public async Task<ActionResult<SuburbDto>> GetDemandDev(int id)
        {
            return Ok();
        }

        [HttpGet("lifestyle")]
        public async Task<ActionResult<SuburbDto>> GetLifestyle(int id)
        {
            return Ok();
        }

        [HttpGet("safety")]
        public async Task<ActionResult<SuburbDto>> GetSafety(int id)
        {
            return Ok();
        }

        [HttpGet("aggregate")]
        public async Task<ActionResult<SuburbDto>> GetAggregate(int id)
        {
            return Ok();
        }


    }
}
