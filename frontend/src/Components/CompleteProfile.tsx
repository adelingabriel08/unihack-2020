import {
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import "../Components/ComponentsCSS/LoginAndRegisterForm.css";
import { Profile } from "../Models/Models";
import functions from "../Services/functions";

export default function CompleteProfile() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(18);
  const [contact, setContact] = useState(false);
  const { saveProfile } = functions();

  async function saveProfilefcn() {
    const profile: Profile = {
      name: name,
      adress: adress,
      gender: gender,
      age: age,
      contact: contact,
    };

    const profileJson = JSON.stringify(profile);
    console.log(profileJson);
    saveProfile(profileJson);
  }

  return (
    <div>
      <div
        className="container-fluid loginregisterform"
        style={{ width: "700px", height: "560px" }}
      >
        <div>
          <h1>Complete your profile</h1>
        </div>
        <div className="container field">
          <TextField
            required
            fullWidth
            id="name"
            label="Nume si prenume"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="container field">
          <TextField
            required
            fullWidth
            id="adress"
            label="Adresa"
            name="adress"
            autoComplete="adress"
            autoFocus
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className="container field">
          <TextField
            required
            fullWidth
            select
            id="gender"
            label="Genul"
            name="gender"
            autoComplete="gender"
            autoFocus
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem key="f" value="f">
              Feminin
            </MenuItem>
            <MenuItem key="m" value="m">
              Masculin
            </MenuItem>
            <MenuItem key="n" value="n">
              Nu mentionez
            </MenuItem>
          </TextField>
        </div>
        <div className="container field">
          <TextField
            required
            fullWidth
            id="age"
            label="Varsta"
            name="age"
            autoComplete="age"
            autoFocus
            type="number"
            onChange={(e) => setAge(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="container field">
          <FormControlLabel
            id="contact"
            control={
              <Checkbox
                checked={contact}
                onChange={(e) => setContact(!contact)}
                name="contact"
                color="primary"
              />
            }
            label="Am intrat in contact cu alte persoane."
          />
        </div>
        <div className="buttons">
          <Button className="button">Cancel</Button>
          <Button onClick={() => saveProfilefcn()} className="button">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
