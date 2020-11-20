namespace unihack.Entities
{
    public class HealthStateEntity : Entity
    {
        public float Temperature { get; set; }
        public bool Fever { get { return this.Temperature>37.2 ; } }
        public bool DryCough { get; set; }
        public bool RunnyNose { get; set; }
        public bool TiredNess { get; set; }
        public bool DifficultyInBreathing { get; set; }
        public bool SoreThroat {get; set; }
        public bool None_Symptom {get;}
        public bool Pains { get; set; }
        public bool NasalCongestion { get; set; }
        public bool Diarrhea { get; set; }
        
    }
}