//1. import
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here
import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";

export const App = () => {
  const [button, setButton] = useState("Apasa-ma!");
  return (
    <div className="container my-5 d-flex justify-content-center">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setButton("Tzeapa!")}
      >
        {button}
      </Button>
    </div>
  );
};
