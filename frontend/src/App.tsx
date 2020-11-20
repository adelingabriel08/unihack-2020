//1. import
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here
import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";
import Routes from "./Routes";

export const App = () => {
  const [button, setButton] = useState("Apasa-ma!");
  return (
    <>
      <Routes></Routes>
    </>
  );
};
