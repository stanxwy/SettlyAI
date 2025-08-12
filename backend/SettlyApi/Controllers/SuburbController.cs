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



    }
}
