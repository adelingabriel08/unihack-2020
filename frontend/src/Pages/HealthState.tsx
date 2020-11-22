import React, {useEffect, useState} from "react"
import {Button, Checkbox, CircularProgress, FormControlLabel, TextField, Typography} from "@material-ui/core";
import {HealthState} from "../Models/Models";
import apiService from "../Services/ApiService";
import { Redirect } from "react-router-dom";
import {PredictComponent} from "../Components/Predict";

export const HealthStateComponent = () => {
    let { addHealthState, checkAuth, Predict } = apiService();
    const [prediction, setPrediction] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showPrediction, setShowPrediction] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        Predict().then((res) => {setPrediction(res.data); setLoading(false); setShowPrediction(true)})
            .catch(() => setLoading(false))
    }, [refresh]);

    if(loading)
        return <div className="container d-flex justify-content-center align-items-center" style={{margin: "400px 0px 400px 0px"}}>
            <CircularProgress />
        </div>
    else if(showPrediction)
            return <div className="container">
                <PredictComponent prediction={prediction}/>
            </div>
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
    if(!checkAuth())
        return <Redirect to="/login"/>
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
            <Button style={{width: "30px"}} onClick={()=> addHealthState(healthStateCollector).then(() => setRefresh(true))}>Send</Button>
        </div>
    </div>
}
