using unihack.Entities;

namespace unihack.Models.Requests
{
    public class ProfileRequest
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public int Age { get; set; }
        public bool Contact { get; set; }


        public ProfileEntity toEntity()
        {
            Entities.ProfileEntity p = new Entities.ProfileEntity();
            p.Name = Name;
            p.Address = Address;
            p.Gender = Gender;
            p.Age = Age;
            p.Contact = Contact;
            return p;
        }
    }
}