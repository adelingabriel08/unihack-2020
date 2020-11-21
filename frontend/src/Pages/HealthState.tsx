import React from "react"
import {Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";

export const HealthState = () =>
{
    let healthStateCollector: any = undefined;
    return <div className="container d-flex flex-column align-items-center" style={{marginTop: "200px", marginBottom: "100px"}}>

        <Typography
            variant="h1"
            gutterBottom
            style={{fontWeight: "bold"}}
        >
            Check your sympthoms
        </Typography>
        <div className="d-flex  flex-column w-50" >
        <TextField
            id="standard-number"
            label="Temperature"
            type="number"
            onChange={(e) => healthStateCollector.temperature = e.target.value}
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.dryCough = e.target.value} name="dryCough" />}
            label="Dry cough"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.runnyNose = e.target.value} name="runnyNose" />}
            label="Runny nose"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.tiredNess = e.target.value} name="tiredNess" />}
            label="Tired ness"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.difficultyInBreathing = e.target.value} name="difficultyInBreathing" />}
            label="Difficulty in breathing"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.soreThroat = e.target.value} name="soreThroat" />}
            label="Sore throat"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.none_Symptom = e.target.value} name="none_Symptom" />}
            label="None symptom"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.pains = e.target.value} name="pains" />}
            label="Pains"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.nasalCongestion = e.target.value} name="nasalCongestion" />}
            label="Nasal congestion"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.nasalCongestion = e.target.value} name="nasalCongestion" />}
            label="Nasal congestion"
        />
        <FormControlLabel
            control={<Checkbox onChange={(e) => healthStateCollector.diarrhea = e.target.value} name="diarrhea" />}
            label="Diarrhea"
        />
        </div>
    </div>
}
