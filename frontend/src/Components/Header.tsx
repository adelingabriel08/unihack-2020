import {Typography} from "@material-ui/core";
import React from "react";

export const Header = () => {
    return (
        <div className="container">
            <div className="row" style={{margin: "180px 0px 100px 0px"}}>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography
                            variant="h1"
                            component="h2"
                            gutterBottom
                            style={{fontWeight: "bold"}}
                        >
                            Monitoring COVID-19 Sympthoms
                        </Typography>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <Typography variant="h5" component="h5" gutterBottom>
                            We're here to prevent COVID-19 new cases.
                        </Typography>
                    </div>
                </div>
                <div className="col-6" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <img src="assets\images\bg-image1.jpg"/>
                </div>
            </div>
        </div>
    );
};
