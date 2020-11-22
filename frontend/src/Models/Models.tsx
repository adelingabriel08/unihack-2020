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
export interface HealthState{
  temperature: number;
  dryCough:	boolean;
  runnyNose: boolean;
  tiredNess: boolean;
  difficultyInBreathing: boolean;
  soreThroat: boolean;
  pains: boolean;
  nasalCongestion: boolean;
  diarrhea: boolean;
  severity: number;
}
