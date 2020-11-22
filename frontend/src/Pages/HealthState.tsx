import React from "react"
import {Button, Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";
import {HealthState} from "../Models/Models";
import apiService from "../Services/ApiService";

export const HealthStateComponent = () => {
    let { addHealthState } = apiService();
    let healthStateCollector: HealthState = {
        temperature: 0,
        dryCough:	false,
        runnyNose: false,
        tiredNess: false,
        difficultyInBreathing: false,
        soreThroat: false,
        pains: false,
        nasalCongestion: false,
        diarrhea: false,
        severity: 0

    };
    return <div className="container d-flex flex-column align-items-center"
                style={{marginTop: "200px", marginBottom: "100px"}}>

        <Typography
            variant="h1"
            gutterBottom
            style={{fontWeight: "bold"}}
        >
            Check your sympthoms
        </Typography>
        <div className="d-flex  flex-column w-50">
            <TextField
                id="standard-number"
                label="Temperature"
                type="number"
                onChange={(e) => healthStateCollector.temperature = Number(e.target.value)}
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.dryCough = e.target.checked}
                                   name="dryCough"/>}
                label="Dry cough"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.runnyNose = e.target.checked}
                                   name="runnyNose"/>}
                label="Runny nose"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.tiredNess = e.target.checked}
                                   name="tiredNess"/>}
                label="Tired ness"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(e) => healthStateCollector.difficultyInBreathing = e.target.checked}
                    name="difficultyInBreathing"/>}
                label="Difficulty in breathing"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.soreThroat = e.target.checked}
                                   name="soreThroat"/>}
                label="Sore throat"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.pains = e.target.checked}
                                   name="pains"/>}
                label="Pains"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.nasalCongestion = e.target.checked}
                                   name="nasalCongestion"/>}
                label="Nasal congestion"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.nasalCongestion = e.target.checked}
                                   name="nasalCongestion"/>}
                label="Nasal congestion"
            />
            <FormControlLabel
                control={<Checkbox onChange={(e) => healthStateCollector.diarrhea = e.target.checked}
                                   name="diarrhea"/>}
                label="Diarrhea"
            />
            <Button style={{width: "30px"}} onClick={()=> addHealthState(healthStateCollector)}>Send</Button>
        </div>
    </div>
}
