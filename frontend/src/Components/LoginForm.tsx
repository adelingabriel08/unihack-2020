import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import "./ComponentsCSS/LoginAndRegisterForm.css";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

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
          <Button className="button">Login</Button>
        </div>
      </div>
    </div>
  );
}
