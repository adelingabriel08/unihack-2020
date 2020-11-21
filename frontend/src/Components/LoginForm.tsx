import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import "./ComponentsCSS/LoginAndRegisterForm.css";
import { User } from "../Models/Models";
import functions from "../Services/functions";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { login } = functions();

  async function loginUser() {
    const user: User = {
      email: userEmail,
      password: password,
    };

    const userJson = JSON.stringify(user);
    login(userJson);
  }
  return (
    <div>
      <div className="container-fluid loginregisterform">
        <div>
          <h1>Login form</h1>
        </div>
        <div className="container field">
          <Person />
          <TextField
            required
            fullWidth
            id="userEmail"
            label="User Email"
            name="userEmail"
            autoComplete="userEmail"
            autoFocus
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
          <Button className="button">Cancel</Button>
          <Button onClick={() => loginUser()} className="button">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
