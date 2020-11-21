using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ML;
using Microsoft.ML.Data;
using Newtonsoft.Json.Serialization;
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
        private readonly IRepository<ProfileEntity> _repository;
        private readonly IRepository<HealthStateEntity> _repositoryHealthState;
        MLContext mlContext = new MLContext(seed: 0);


        public Profile(ApplicationDbContext ctx)
        {
            _repository = ctx.GetRepository<ProfileEntity>();
            _repositoryHealthState = ctx.GetRepository<HealthStateEntity>();
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

        [HttpPost("/Predict")]
        [ProducesResponseType(typeof(ProfileEntity), 200)]
        public async Task<IActionResult> TrainModel()
        {
            var userId = HttpContext.GetCurrentUserId();
            if (userId is null) return Unauthorized();
            var userProfile =_repository.Queryable.FirstOrDefault(t => t.UserId == userId);
            userProfile.HealthState = _repositoryHealthState.Queryable.FirstOrDefault(t => t.UserId == userId);
           var profileEntities= GetProfileEntitiesData();
           if (userProfile == null || userProfile.HealthState==null)
               return StatusCode(500);
           
           IDataView dataView = mlContext.Data.LoadFromEnumerable(profileEntities);
           var pipeline = mlContext.Transforms.CopyColumns(outputColumnName: "Label", inputColumnName:"Severity")
               .Append(mlContext.Transforms.Concatenate("Features", "Fever", "DryCough", "RunnyNose", "TiredNess","DifficultyInBreathing", "SoreThroat", "None_Symptom", "Pains", "NasalCongestion", "Diarrhea", "Age", "Gender", "Contact"))
               .Append(mlContext.Regression.Trainers.LbfgsPoissonRegression());
           var model = pipeline.Fit(dataView);
           var severity = Predict(mlContext, model, userProfile);
//           Console.WriteLine(profileEntities.FirstOrDefault().Age);
            return Ok(severity);
        }
        private static float Predict(MLContext mlContext, ITransformer model, ProfileEntity userProfile )
        {
          
            var predictionFunction = mlContext.Model.CreatePredictionEngine<CovidSympomes, CovidSeverityPrediction>(model);
            var covidSymptomesSample = new CovidSympomes()
            {
                
               Age = userProfile.Age,
               Contact = userProfile.Contact,
               Diarrhea = userProfile.HealthState.Diarrhea,
               Fever = userProfile.HealthState.Fever,
               Gender = userProfile.Gender,
               Pains = userProfile.HealthState.Pains,
               Severity = userProfile.HealthState.Severity,
               DryCough = userProfile.HealthState.DryCough,
               NasalCongestion = userProfile.HealthState.NasalCongestion,
               None_Symptom = userProfile.HealthState.None_Symptom,
               RunnyNose = userProfile.HealthState.RunnyNose,
               SoreThroat = userProfile.HealthState.SoreThroat,
               TiredNess = userProfile.HealthState.TiredNess,
               DifficultyInBreathing = userProfile.HealthState.DifficultyInBreathing
            };
            var prediction = predictionFunction.Predict(covidSymptomesSample);
            Console.WriteLine($"**********************************************************************");
            Console.WriteLine($"Predicted fare: {prediction.Severity:0.####}");
            Console.WriteLine($"**********************************************************************");
            return prediction.Severity;
        }
        private List<CovidSympomes> GetProfileEntitiesData()
        {
            string[] lines = System.IO.File.ReadAllLines(@"Resources/Cleaned-Data.csv");

            var profileEntitiesList = new List<CovidSympomes>();
            foreach (var line  in lines)
            {
                var items = line.Split(',').ToList();
                var profileEntity = new CovidSympomes();
                profileEntity.Fever = items[0]=="1";   

                profileEntity.TiredNess = items[1]=="1";
                profileEntity.DryCough = items[2]=="1";
                profileEntity.DifficultyInBreathing = items[3]=="1";
                profileEntity.SoreThroat = items[4]=="1";
                profileEntity.None_Symptom = items[5]=="1";
                profileEntity.Pains = items[6]=="1";
                profileEntity.NasalCongestion = items[7]=="1";
                profileEntity.RunnyNose = items[8]=="1";
                profileEntity.Diarrhea = items[9]=="1";
                profileEntity.Age = items[11] == "1" ? 7 :
                    items[12] == "1" ? 15 :
                    items[13] == "1" ? 23 :
                    items[14] == "1" ? 40 : 65;
                profileEntity.Gender = items[16]=="1"; //0 for male
                profileEntity.Severity =
                    items[0] == "19" ? 1 : items[20] == "1" ? 2 : items[21] == "1" ? 0 : 4;
                profileEntity.Contact = items[25] == "1";
                profileEntitiesList.Add(profileEntity);


            }

            return profileEntitiesList;

        }
    }
    
    public class CovidSympomes
    {
        [LoadColumn(0)]
        public bool Fever { get; set; }
        [LoadColumn(1)]
        public bool DryCough { get; set; }
        [LoadColumn(2)]
        public bool RunnyNose { get; set; }
        [LoadColumn(3)]
        public bool TiredNess { get; set; }
        [LoadColumn(4)]
        public bool DifficultyInBreathing { get; set; }
        [LoadColumn(5)]
        public bool SoreThroat {get; set; }
        [LoadColumn(6)]
        public bool None_Symptom {get; set; }
        [LoadColumn(7)]
        public bool Pains { get; set; }
        [LoadColumn(8)]
        public bool NasalCongestion { get; set; }
        [LoadColumn(9)]
        public bool Diarrhea { get; set; }
        [LoadColumn(10)]
        public int Severity { get; set; }
        [LoadColumn(11)]
        public int Age { get; set; }
        
        [LoadColumn(12)]
        public bool Gender { get; set; }
        
        [LoadColumn(13)]
        public bool Contact { get; set; }
        public object Clone()
        {
            return this.MemberwiseClone();
        }

    }
    
    public class CovidSeverityPrediction
    {
        [ColumnName("Score")]
        public int Severity { get; set; }
    }
}