using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using unihack.Data;
using unihack.Entities;
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

        [HttpPost("/Create")]
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

        [HttpPost("/TrainModel")]
        [ProducesResponseType(typeof(ProfileEntity), 200)]
        public async Task<IActionResult> TrainModel()
        {
            var userId = HttpContext.GetCurrentUserId();
            if (userId is null) return Unauthorized();
           var profileEntities= GetProfileEntitiesData();
//           Console.WriteLine(profileEntities.FirstOrDefault().Age);
            return Ok();
        }

        private List<ProfileEntity> GetProfileEntitiesData()
        {
            string[] lines = System.IO.File.ReadAllLines(@"Resources/Cleaned-Data.csv");

            var profileEntitiesList = new List<ProfileEntity>();
            foreach (var line  in lines)
            {
                var items = line.Split(',').ToList();
                var profileEntity = new ProfileEntity();
                profileEntity.HealthState = new HealthStateEntity();
                profileEntity.HealthState.Fever = items[0]=="1";   

                profileEntity.HealthState.TiredNess = items[1]=="1";
                profileEntity.HealthState.DryCough = items[2]=="1";
                profileEntity.HealthState.DifficultyInBreathing = items[3]=="1";
                profileEntity.HealthState.SoreThroat = items[4]=="1";
                profileEntity.HealthState.None_Symptom = items[5]=="1";
                profileEntity.HealthState.Pains = items[6]=="1";
                profileEntity.HealthState.NasalCongestion = items[7]=="1";
                profileEntity.HealthState.RunnyNose = items[8]=="1";
                profileEntity.HealthState.Diarrhea = items[9]=="1";
                profileEntity.Age = items[11] == "1" ? 7 :
                    items[12] == "1" ? 15 :
                    items[13] == "1" ? 23 :
                    items[14] == "1" ? 40 : 65;
                profileEntity.Gender = items[16]; //0 for male
                profileEntity.HealthState.Severity =
                    items[0] == "19" ? 1 : items[20] == "1" ? 2 : items[21] == "1" ? 0 : 4;
                profileEntity.Contact = items[25] == "1";
                profileEntitiesList.Add(profileEntity);


            }

            return profileEntitiesList;

        }
    }
}