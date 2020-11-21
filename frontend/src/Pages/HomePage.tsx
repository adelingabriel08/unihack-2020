import React from "react";
import {Header} from "../Components/Header";
import {FilledBackground} from "../Components/FilledBackground";
import {Typography} from "@material-ui/core";

export default function HomePAge() {
    return (
        <>
            <Header title="Monitoring COVID-19 Sympthoms" subtitle="we're here to prevent new COVID-19 cases"
                    imagePath="assets/images/bg-image1.jpg" />
            <FilledBackground id="staySafe">
                <Typography
                    variant="h2"
                    gutterBottom
                    style={{fontWeight: "bold"}}
                    className="my-5"
                >
                    What our doctors recommend
                </Typography>
                <div className="col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >
                    <img src="assets/images/stay_safe.svg" width="100%"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                     className="col-12 col-md-6 d-flex flex-column justify-content-around">
                    <Typography variant="h5"  gutterBottom>
                        People age 2 and older should wear masks in public settings and when around people who don’t
                        live in
                        their household.</Typography>
                    <Typography variant="h5" gutterBottom>
                        Masks offer some protection to you and are also meant to protect those around you, in case you
                        are
                        unknowingly infected with the virus that causes COVID-19.</Typography>
                    <Typography variant="h5" gutterBottom>
                        A mask is NOT a substitute for social distancing. Masks should still be worn in addition to
                        staying
                        at least 6 feet apart.</Typography>
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
            </FilledBackground>
            <Header title="How many people have COVID-19?"
                    subtitle="It has spread so rapidly and to so many countries that the World Health Organization has declared it a pandemic"
                    imagePath="assets/images/fever.gif" id="stats"/>
            <FilledBackground><p>Hello World!</p></FilledBackground>
            <FilledBackground><p>Hello World!</p></FilledBackground>
        </>
    );
}
