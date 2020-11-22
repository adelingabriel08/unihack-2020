import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./ComponentsCSS/Patients.css";
import { useState } from "react";
import apiService from "../Services/ApiService";
import { Patient } from "../Models/Models";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(
  name: string,
  age: number,
  gender: string,
  address: string,
  haveSymptoms: boolean,
  temperature: number,
  dryCaugh: boolean,
  runnyNose: boolean,
  tiredNess: boolean,
  difficultyInBreathing: boolean,
  soreThroat: boolean,
  pains: boolean,
  diarrhea: boolean,
  nasalCongestion: boolean
) {
  return {
    name,
    age,
    gender,
    address,
    haveSymptoms,
    symptoms: [
      {
        temperature,
        dryCaugh,
        runnyNose,
        tiredNess,
        difficultyInBreathing,
        soreThroat,
        pains,
        diarrhea,
        nasalCongestion,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  console.log(row);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} id="bigtable">
        <TableCell>
          <IconButton
            className="iconbutton"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell>{row.gender == "f" ? "Female" : "Male"}</TableCell>
        <TableCell>{row.haveSymptoms ? "Yes" : "No"}</TableCell>
        <TableCell>{row.address}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} className="collapse-table">
              <Table></Table>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell width="50%">Symptoms</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.symptoms.map((d) => (
                    <>
                      <TableRow key="temperature">
                        <TableCell component="td" scope="row">
                          Temperature
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.temperature} &#x2103;
                        </TableCell>
                      </TableRow>
                      <TableRow key="caugh">
                        <TableCell component="td" scope="row">
                          Dry Caugh
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.dryCaugh ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="runnNose">
                        <TableCell component="td" scope="row">
                          RunnyNose
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.runnyNose ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="tiredness">
                        <TableCell component="td" scope="row">
                          TiredNess
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.tiredNess ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="breath">
                        <TableCell component="td" scope="row">
                          Difficulty in breathing
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.difficultyInBreathing ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="sorethroat">
                        <TableCell component="td" scope="row">
                          Sore Throat
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.soreThroat ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="pains">
                        <TableCell component="td" scope="row">
                          Pains
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.pains ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="diarhea">
                        <TableCell component="td" scope="row">
                          Diarrhea
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.diarrhea ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                      <TableRow key="nasal">
                        <TableCell component="td" scope="row">
                          NasalCongention
                        </TableCell>
                        <TableCell component="td" scope="row">
                          {d.nasalCongestion ? "yes" : "no"}
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const { getPatients } = apiService();
  const [patients, setPatients] = useState<Patient[]>([]);

  const getAllPatients = async () => {
    try {
      const patients = await getPatients();
      setPatients(patients.data);
      console.log(patients.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const rows = patients.map((p) =>
    createData(
      p.name,
      p.age,
      p.gender,
      p.address,
      p.healthState.none_Symptom,
      p.healthState.temperature,
      p.healthState.dryCaugh,
      p.healthState.runnyNose,
      p.healthState.tiredNess,
      p.healthState.difficultyInBreathing,
      p.healthState.soreThroat,
      p.healthState.pains,
      p.healthState.diarrhea,
      p.healthState.nasalCongestion
    )
  );

  useEffect(() => {
    getAllPatients();

    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="patients">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className="table-header">
              <TableCell />
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Symptoms</TableCell>
              <TableCell>Adress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
