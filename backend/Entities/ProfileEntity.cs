using Microsoft.Extensions.Configuration.UserSecrets;
using unihack.Models.Requests;

namespace unihack.Entities
{
    public class ProfileEntity: Entity
    {
        public string Name{get;set;}
        public string Address{get;set;}
        public bool Gender{get;set;}
        public int Age{get;set;}
        public bool Contact{get;set;}
        public string UserId{get;set;}
        
        public User User { get; set; }
        
        public HealthStateEntity HealthState { get; set; }
        
    }
}