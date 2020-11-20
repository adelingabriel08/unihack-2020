using System.ComponentModel.DataAnnotations;

namespace unihack.Models.Requests
{
    public class UserLoginRequest
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
    }
}