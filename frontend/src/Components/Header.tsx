import { Typography } from "@material-ui/core";
import React from "react";

export const Header = () => {
  return (
    <div className="row" style={{ margin: "100px 0px 100px 0px" }}>
      <div className="col-6 d-flex flex-column justify-content-center">
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Monitoring COVID-19 Sympthoms
        </Typography>
        <h3 className="mt-3"></h3>
        <Typography variant="h5" component="h5" gutterBottom>
          We're here to prevent COVID-19 new cases.
        </Typography>
      </div>
      <div className="col-6">
        <img src="assets\images\bg-image1.jpg" />
      </div>
    </div>
  );
};
