namespace unihack.Entities
{
    public class HealthStateEntity : Entity
    {
        public float Temperature { get; set; }
        public bool Fever { get; set; }
        public bool DryCough { get; set; }
        public bool RunnyNose { get; set; }
        public bool TiredNess { get; set; }
        public bool DifficultyInBreathing { get; set; }
        public bool SoreThroat {get; set; }
        public bool None_Symptom {get; set; }
        public bool Pains { get; set; }
        public bool NasalCongestion { get; set; }
        public bool Diarrhea { get; set; }
        public int Severity { get; set; }
        
        public string UserId{get;set;}
        
        public User User { get; set; }

        
    }
}