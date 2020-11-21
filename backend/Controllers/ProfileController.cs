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
               .Append(mlContext.Transforms.Concatenate("Features", "Fever", "DryCough", "RunnyNose", "TiredNess","DifficultyInBreathing", "SoreThroat", "None_Symptom", "Pains", "NasalCongestion", "Diarrhea", "Age09" ,"Age1019","Age2024","Age2559", "Age60", "Gender", "Contact"))
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
                
               Age09 = userProfile.Age<10? 1 : 0,
               Age1019 = userProfile.Age>=10&& userProfile.Age<20 ? 1 : 0,
               Age2024 = userProfile.Age>=20 && userProfile.Age<25 ? 1 : 0,

               Age2559 = userProfile.Age>24 && userProfile.Age<60 ? 1 : 0,
               Age60 = userProfile.Age>59 ? 1 : 0,

               Contact = userProfile.Contact? 1 : 0,
               Diarrhea = userProfile.HealthState.Diarrhea? 1 : 0,
               Fever = userProfile.HealthState.Fever? 1 : 0,
               Gender = userProfile.Gender== "m"? 1 : 0,
               Pains = userProfile.HealthState.Pains? 1 : 0,
               Severity = userProfile.HealthState.Severity,
               DryCough = userProfile.HealthState.DryCough? 1 : 0,
               NasalCongestion = userProfile.HealthState.NasalCongestion? 1 : 0,
               None_Symptom = userProfile.HealthState.None_Symptom? 1 : 0,
               RunnyNose = userProfile.HealthState.RunnyNose? 1 : 0,
               SoreThroat = userProfile.HealthState.SoreThroat? 1 : 0,
               TiredNess = userProfile.HealthState.TiredNess? 1 : 0,
               DifficultyInBreathing = userProfile.HealthState.DifficultyInBreathing ? 1 : 0
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
                profileEntity.Fever = Int32.Parse(items[0]);   

                profileEntity.TiredNess = Int32.Parse(items[1]);
                profileEntity.DryCough = Int32.Parse(items[2]);
                profileEntity.DifficultyInBreathing = Int32.Parse(items[3]);
                profileEntity.SoreThroat = Int32.Parse(items[4]);
                profileEntity.None_Symptom = Int32.Parse(items[5]);
                profileEntity.Pains = Int32.Parse(items[6]);
                profileEntity.NasalCongestion = Int32.Parse(items[7]);
                profileEntity.RunnyNose = Int32.Parse(items[8]);
                profileEntity.Diarrhea =Int32.Parse( items[9]);
                profileEntity.Age09 = Int32.Parse(items[11]);
                profileEntity.Age1019 = Int32.Parse(items[12]);
                profileEntity.Age2024 = Int32.Parse(items[13] );
                profileEntity.Age2559 = Int32.Parse(items[14]) ;
                profileEntity.Age60 = Int32.Parse(items[15] );
                profileEntity.Gender = Int32.Parse(items[16]); //0 for male
                profileEntity.Severity =
                    items[0] == "19" ? 1 : items[20] == "1" ? 2 : items[21] == "1" ? 0 : 4;
                profileEntity.Contact = Int32.Parse(items[25]);
                profileEntitiesList.Add(profileEntity);


            }

            return profileEntitiesList;

        }
    }
    
    public class CovidSympomes
    {
        [LoadColumn(0)]
        public float Fever { get; set; }
        [LoadColumn(1)]
        public float DryCough { get; set; }
        [LoadColumn(2)]
        public float RunnyNose { get; set; }
        [LoadColumn(3)]
        public float TiredNess { get; set; }
        [LoadColumn(4)]
        public float DifficultyInBreathing { get; set; }
        [LoadColumn(5)]
        public float SoreThroat {get; set; }
        [LoadColumn(6)]
        public float None_Symptom {get; set; }
        [LoadColumn(7)]
        public float Pains { get; set; }
        [LoadColumn(8)]
        public float NasalCongestion { get; set; }
        [LoadColumn(9)]
        public float Diarrhea { get; set; }
        [LoadColumn(10)]
        public float Age09 { get; set; }
        [LoadColumn(11)]
        public float Age1019 { get; set; }
        [LoadColumn(12)]
        public float Age2024 { get; set; }
        [LoadColumn(13)]
        public float Age2559 { get; set; }
        [LoadColumn(14)]
        public float Age60 { get; set; }
        [LoadColumn(15)]
        public float Gender { get; set; }
        [LoadColumn(16)]
        public float Contact { get; set; }
        [LoadColumn(17)]
        public float Severity { get; set; }
        public object Clone()
        {
            return this.MemberwiseClone();
        }

    }
    
    public class CovidSeverityPrediction
    {
        [ColumnName("Score")]
        public float Severity { get; set; }
    }
}