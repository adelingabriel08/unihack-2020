import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";

export const App = () => {
  const [button, setButton] = useState("Apasa-ma!");
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
      </div>
    </>
  );
};
