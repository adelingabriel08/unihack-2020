using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using unihack.Entities;

namespace unihack.Models.Requests
{
    public class UserRegistrationRequest
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        
        public int UserType { get; set; }
    }
}