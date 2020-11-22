import {Slider, Typography} from "@material-ui/core";
import React from "react";

export const PredictComponent = (props: {prediction: number}) => {
    const sliderValue = props.prediction*33;
    console.log(props.prediction);
    return <div style={{margin: "200px 0px 400px 0px"}}>
        <Typography variant="h3" gutterBottom>
            Your prediction in severity
        </Typography>
        <div className="px-5 mt-5">
            <Slider disabled defaultValue={sliderValue} aria-labelledby="disabled-slider"/>
        </div>
        <div className="d-flex justify-content-between">
            <Typography variant="h5" gutterBottom>
                Very Low
            </Typography>
            <Typography variant="h5" gutterBottom>
                Low
            </Typography>
            <Typography variant="h5" gutterBottom>
                Medium
            </Typography>
            <Typography variant="h5" gutterBottom>
                High
            </Typography>
        </div>

    </div>
}
