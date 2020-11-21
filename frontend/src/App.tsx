import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import Routes from "./Routes";
import {Header} from "./Components/Header";
import {FilledBackground} from "./Components/FilledBackground";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes></Routes>
    </>
  );
};
