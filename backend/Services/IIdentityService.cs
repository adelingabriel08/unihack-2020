using System.Threading.Tasks;
using unihack.Entities;
using unihack.Models;
using unihack.Models.Requests;

namespace unihack.Services
{
    public interface IIdentityService
    {
        Task<AuthenticationResult> RegisterAsync(UserRegistrationRequest request);
        Task<AuthenticationResult> LoginAsync(string email, string password);
        Task<AuthenticationResult> UpdateAsync(User user, UserUpdateRequest request);
    }
}