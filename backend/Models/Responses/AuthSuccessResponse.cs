using unihack.Entities;

namespace unihack.Models.Responses
{
    public class AuthSuccessResponse
    {
        public string Token { get; set; }

        public int UserType { get; set; }
    }
}