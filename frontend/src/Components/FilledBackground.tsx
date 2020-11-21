import React from "react";
import { Typography } from "@material-ui/core";

export const FilledBackground = () => {
  const background: React.CSSProperties = {
    backgroundColor: "#f5f186",
    backgroundImage: "linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)",
  };
  return (
    <div
      className="container-fluid d-flex align-items-center p-5"
      style={background}
    >
      <div data-aos="fade-up" data-aos-duration="1000" className="container ">
        <div className="row">
          <Typography
            variant="h2"
            component="h3"
            gutterBottom
            style={{ fontWeight: "bold" }}
            className="my-5"
          >
            What our doctors recommend
          </Typography>
          <div
            className=" col-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img src="assets/images/stay_safe.svg" width="100%" alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="col-6 d-flex flex-column justify-content-around"
          >
            <Typography variant="h5" component="h5" gutterBottom>
              People age 2 and older should wear masks in public settings and
              when around people who don’t live in their household.
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
              Masks offer some protection to you and are also meant to protect
              those around you, in case you are unknowingly infected with the
              virus that causes COVID-19.
            </Typography>
            <Typography variant="h5" component="h5" gutterBottom>
              A mask is NOT a substitute for social distancing. Masks should
              still be worn in addition to staying at least 6 feet apart.
            </Typography>
            {/*<Typography variant="h5" component="h5" gutterBottom>*/}
            {/*    Wash your hands with soap and water for at least 20 seconds or use hand sanitizer with at least*/}
            {/*    60%*/}
            {/*    alcohol after touching or removing your mask.</Typography>*/}
            {/*<Typography variant="h5" component="h5" gutterBottom>*/}
            {/*    Masks may not be necessary when you are outside by yourself away from others, or with other*/}
            {/*    people*/}
            {/*    who live in your household. However, some localities may have mask mandates while out in public*/}
            {/*    and*/}
            {/*    these mandates should always be followed.</Typography>*/}
            {/*<Typography variant="h5" component="h5" gutterBottom>*/}
            {/*    CDC is still studying the effectiveness of different types of masks and will update our*/}
            {/*    recommendations as new scientific evidence becomes available.*/}
            {/*</Typography>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
