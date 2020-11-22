import {Slider, Typography} from "@material-ui/core";
import React from "react";

export const PredictComponent = (props: {prediction: number}) => {
    const sliderValue = props.prediction*25;
    return <div style={{margin: "200px 0px 400px 0px"}}>
        <Typography variant="h3" gutterBottom>
            Your prediction
        </Typography>
        <Slider disabled defaultValue={sliderValue} aria-labelledby="disabled-slider"/>
    </div>
}
