using Microsoft.Extensions.Configuration.UserSecrets;
using unihack.Models.Requests;

namespace unihack.Entities
{
    public class Profile: Entity
    {
        public string Name{get;set;}
        public string Address{get;set;}
        public string Gender{get;set;}
        public int Age{get;set;}
        public bool Contact{get;set;}
        public string UserId{get;set;}
        
    }
}