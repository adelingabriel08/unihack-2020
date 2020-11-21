using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace unihack.Entities
{
    public class User : IdentityUser
    {
        public int Type { get; set; }
        [NotMapped]
        public override string PhoneNumber { get; set; }
        [NotMapped]
        public override bool PhoneNumberConfirmed { get; set; }
        [NotMapped]
        public override bool TwoFactorEnabled { get; set; }
        [NotMapped]
        public override DateTimeOffset? LockoutEnd { get; set; }
        [NotMapped]
        public override bool LockoutEnabled { get; set; }
        [NotMapped]
        public override int AccessFailedCount { get; set; }

        public User() : base() {}
        public User(string userName) : base(userName) {}
    }

    public enum UserTypeEnum
    {
        Patient,
        Doctor,
        DspEmployee,
        NoRoles
    }
}