import { Button } from "@material-ui/core";
import React from "react";
import "./ComponentsCSS/Navbar.css";

export const Navbar = () => {
  return (
    <nav className="container-fluid d-flex justify-content-between align-items-center">
      <img src="assets/images/stay_safe.svg" height="100px" />
      <div className="d-flex">
        <div className="nav-item">
          {/* icon here */}
          <Button variant="contained" color="inherit">
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
          <Button variant="contained" color="inherit">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};
