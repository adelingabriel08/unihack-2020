import { Button } from "@material-ui/core";
import React from "react";
import "./ComponentsCSS/Navbar.css";
import history from "./History";

export const Navbar = () => {
  return (
    <nav className="container-fluid d-flex justify-content-between align-items-center">
      <img src="assets/images/stay_safe.svg" height="100px" />
      <div className="d-flex">
        <div className="nav-item">
          {/* icon here */}
          <Button
            onClick={() => history.push("/")}
            variant="contained"
            color="inherit"
            style={{ color: "#1DB954" }}
          >
            Home
          </Button>
        </div>
        <div className="nav-item">
          {/* icon here */}
          <Button variant="contained" color="inherit">
            Covid Statistics
          </Button>
        </div>
        <div className="nav-item">
          {/* icon here */}
          <Button variant="contained" color="inherit">
            Protect Yourself
          </Button>
        </div>
        <div className="nav-item">
          {/* icon here */}
          <Button variant="contained" color="inherit">
            Check your Sympthoms
          </Button>
        </div>
        <div className="nav-item">
          {/* icon here */}
          <Button
            onClick={() => history.push("/login")}
            variant="contained"
            color="inherit"
          >
            Login
          </Button>
          <Button
            onClick={() => history.push("/register")}
            variant="contained"
            color="inherit"
          >
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};
