using SettlyModels;
using Microsoft.AspNetCore.Mvc;

using ISettlyService;
using SettlyModels.Dtos;
using Microsoft.EntityFrameworkCore;
using SettlyApi.Middleware;

namespace SettlyApi.Controllers

{

    [ApiController]
    [Route("api/suburb")]
    public class SuburbController : ControllerBase
    {

        private readonly ISuburbReportService _suburbReportService;
        private readonly ILogger<ExceptionMiddleware> _logger;


        public SuburbController(ISuburbReportService suburbReportService, ILogger<ExceptionMiddleware> logger)
        {
            _suburbReportService = suburbReportService;
            _logger = logger;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SuburbReportDto>> GetSuburbReport(int id)
        {

            var report = await _suburbReportService.GenerateSuburbReportAsync(id);
            return Ok(report);

        }

    }
}