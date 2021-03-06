using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using unihack.Data;
using unihack.Entities;
using unihack.Extensions;

namespace unihack.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [ProducesResponseType(typeof(UnauthorizedResult), 401)]
    public class HealthStateController : Controller
    {
        private readonly IRepository<HealthStateEntity> _healthStateRepository;

        public HealthStateController(ApplicationDbContext context)
        {
            _healthStateRepository = context.GetRepository<HealthStateEntity>();
        }

        [HttpPost("Add")]
        public async Task<IActionResult> Post([FromBody] HealthStateEntity healthStateEntity)
        {
            var userId = HttpContext.GetCurrentUserId();
            if (userId is null) return Unauthorized();
            healthStateEntity.UserId = userId;
            if (!_healthStateRepository.Queryable.Any(t => t.UserId == userId))
            {
                await _healthStateRepository.AddAsync((healthStateEntity));
                
            }
            else
            {
                var smf = _healthStateRepository.Queryable.FirstOrDefault(t => t.UserId==userId);
                await _healthStateRepository.DeleteAsync(smf);
                await _healthStateRepository.UpdateAsync(healthStateEntity);
            }

            return Ok();
        }
       
    }
}