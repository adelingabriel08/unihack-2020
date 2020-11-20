using Microsoft.AspNetCore.Mvc;

namespace unihack.Controllers
{
    public class ExampleController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return Ok("Example");
        }
    }
}