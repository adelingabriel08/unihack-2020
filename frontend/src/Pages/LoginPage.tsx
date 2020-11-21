import { Button, TextField } from "@material-ui/core";
import { Lock, Person } from "@material-ui/icons";
import React from "react";
import LoginForm from "../Components/LoginForm";
import "../Pages/PagesCSS/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="loginpage">
      <div></div>
      <LoginForm></LoginForm>
      <div></div>
    </div>
  );
}
