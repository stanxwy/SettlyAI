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
        public async Task<ActionResult> GetIncome(int id)
        {
            return Ok();
        }

        [HttpGet("market")]
        public async Task<ActionResult> GetMarket(int id)
        {
            return Ok();
        }

        [HttpGet("demand-development")]
        public async Task<ActionResult> GetDemandDev(int id)
        {
            return Ok();
        }

        [HttpGet("lifestyle")]
        public async Task<ActionResult<LivabilityDto>> GetLifestyle(int id)
        {
            var liveStyle = await _suburbService.GetLifestyleAsync(id);
            return Ok(liveStyle);
            //要不要检查不存在
            //create 是不是要location
            //要不要try catch
            //返回notfound还是抛出错误
        }

        [HttpGet("safety")]
        public async Task<ActionResult> GetSafety(int id)
        {
            return Ok();
        }

        [HttpGet("aggregate")]
        public async Task<ActionResult> GetAggregate(int id)
        {
            return Ok();
        }


    }
}
