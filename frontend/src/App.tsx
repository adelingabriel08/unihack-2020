import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import Routes from "./Routes";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes></Routes>
    </>
  );
};
