import {Typography} from "@material-ui/core";
import React from "react";
import './ComponentsCSS/Typography.css';

type HeaderProps = {
    title: string,
    subtitle?: string,
    imagePath: string,
    id?: string
}
export const Header = (props: HeaderProps) => {
    return (
        <div className="container " id={props.id}>
            <div className="row d-flex"  style={{padding: "160px 0px 100px 0px"}}>
                <div className="col-12 col-lg-6 d-flex flex-column ">
                    <div data-aos="fade-up" data-aos-duration="1000" >
                        <Typography
                            variant="h1"
                            gutterBottom
                            style={{fontWeight: "bold"}}
                        >
                            {props.title}
                        </Typography>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        <Typography variant="h5" gutterBottom>
                            {props.subtitle}
                        </Typography>
                    </div>
                </div>
                <div
                    className="col-12 col-lg-6 d-flex align-items-center my-5"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    <img src={props.imagePath} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
};
