import React from "react";
import "../Components/ComponentsCSS/LoginForm.css";
import SignUpForm from "../Components/SignUpForm";
import "../Pages/PagesCSS/LoginPage.css";

export default function SignUpPage() {
  return (
    <div className="login-register-page">
      <SignUpForm></SignUpForm>
    </div>
  );
}
