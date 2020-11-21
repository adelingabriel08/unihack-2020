import { Button, TextField } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
import React, { useState } from "react";
import "../Components/ComponentsCSS/LoginAndRegisterForm.css";
import functions from "../Services/functions";
import history from "../Components/History";
import { User } from "../Models/Models";

export default function SignUpForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { register } = functions();

  async function userRegister() {
    const user: User = {
      email: email,
      password: password,
    };
    console.log("const: " + user.email + " " + user.password);
    const userJson = JSON.stringify(user);
    console.log("json: " + userJson);
    register(userJson);
  }

  return (
    <div>
      <div className="container-fluid loginregisterform">
        <div>
          <h1>Register</h1>
        </div>
        <div className="container field">
          <Person />
          <TextField
            required
            fullWidth
            id="email"
            label="User Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container field">
          <Lock />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <Button onClick={() => history.push("/")} className="button">
            Cancel
          </Button>
          <Button onClick={() => userRegister()} className="button">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
