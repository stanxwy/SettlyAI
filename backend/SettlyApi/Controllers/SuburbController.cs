using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using SettlyModels;
using SettlyModels.Entities;
namespace SettlyApi.Controllers

{

    using Microsoft.AspNetCore.Mvc;
    [ApiController]
    [Route("suburb")]
    public class SuburbController : ControllerBase
    {


        private readonly SettlyDbContext _context;

        public SuburbController(SettlyDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Suburb>> GetSuburb(int id)
        {

            var suburb = await _context.Suburbs.FindAsync(id);
            if (suburb == null)
                return NotFound();
            //todo: dto
            return Ok(suburb);
        }
    }
}