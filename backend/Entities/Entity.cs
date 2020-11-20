using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using unihack.Base;
using Newtonsoft.Json;

namespace unihack.Entities
{
    public class Entity
    {
        [Key]
        [ReadOnly(true)] public string Id { get; set; }
        [JsonIgnore]
        public bool Deleted { get; set; }
    }
}