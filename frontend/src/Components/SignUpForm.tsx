import { Button, TextField } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
import React, { useState } from "react";
import "../Components/ComponentsCSS/LoginForm.css";

export default function SignUpForm() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div>
      <div className="container-fluid loginform">
        <div>
          <h1>Register</h1>
        </div>
        <div className="container field">
          <Person />
          <TextField
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="userName"
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
          <Button className="button">Register</Button>
        </div>
      </div>
    </div>
  );
}
