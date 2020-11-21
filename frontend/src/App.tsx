import React from "react";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Routes from "./Routes";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes></Routes>
      <Footer></Footer>
    </>
  );
};
