using Microsoft.AspNetCore.Mvc;
using SettlyModels.Dtos;
using ISettlyService;

namespace SettlyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FavouriteController : ControllerBase
    {
        private readonly IFavouriteService _favouriteService;

        public FavouriteController(IFavouriteService favouriteService)
        {
            _favouriteService = favouriteService;
        }


        [HttpPost]
        public async Task<IActionResult> AddFavourite([FromBody] AddFavouriteDto dto)
        {
            var userId = 1; //mock

            await _favouriteService.AddFavouriteAsync(dto, userId);

            return Ok(new { success = true });
        }
    }
}
