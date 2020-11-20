import { Paper, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Person, Lock } from "@material-ui/icons";
import React, { useState } from "react";
import "../Pages/PagesCSS/LoginPage.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Paper className="loginpaper" elevation={3}>
            <div className="title">
              <h1>Login Form</h1>
            </div>
            <div className="content">
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Person />
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <Lock />
                </Grid>
                <Grid item>
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
                </Grid>
              </Grid>
              <br></br>
            </div>
          </Paper>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
