export interface User {
  email: string;
  password: string;
}

export interface Profile {
  name: string;
  adress: string;
  gender: string;
  age: number;
  contact: boolean;
}

export interface Patient {
  name: string;
  age: number;
  gender: string;
  address: string;
  healthState: {
    temperature: number;
    dryCaugh: boolean;
    runnyNose: boolean;
    tiredNess: boolean;
    difficultyInBreathing: boolean;
    soreThroat: boolean;
    none_Symptom: boolean;
    pains: boolean;
    diarrhea: boolean;
    nasalCongestion: boolean;
  };
}

export interface HealthState {
  temperature: number;
  dryCough: boolean;
  runnyNose: boolean;
  tiredNess: boolean;
  difficultyInBreathing: boolean;
  soreThroat: boolean;
  pains: boolean;
  nasalCongestion: boolean;
  diarrhea: boolean;
  severity: number;
}
