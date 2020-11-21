using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using unihack.Data;
using unihack.Extensions;
using unihack.Models.Requests;
using unihack.Models.Responses;

namespace unihack.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [ProducesResponseType(typeof(UnauthorizedResult), 401)]
    public class Profile : Controller
    {
        private readonly IRepository<Entities.ProfileEntity> _repository;
        MLContext mlContext = new MLContext(seed: 0);


        public Profile(ApplicationDbContext ctx)
        {
            _repository = ctx.GetRepository<Entities.ProfileEntity>();
        }

        [HttpPost]
        [ProducesResponseType(typeof(CreatedResult), 201)]
        [ProducesResponseType(typeof(NotFoundResult), 404)]
        public async Task<IActionResult> Create([FromBody] ProfileRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new AuthFailedResponse
                {
                    Errors = ModelState.Values.SelectMany(x => x.Errors.Select(a => a.ErrorMessage))
                });
            }

            var userId = HttpContext.GetCurrentUserId();
            if (userId is null) return Unauthorized();
            var profile = request.toEntity();
            profile.UserId = userId;
            await _repository.AddAsync(profile);

            return Ok(Created("profile", profile));
        }
    }
}