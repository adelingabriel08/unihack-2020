import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import history from "./Components/History";
import Register from "./Pages/SignUpPage";
import CompleteProfilePage from "./Pages/CompleteProfilePage";

import { Navbar } from "./Components/Navbar";
import Patients from "./Components/Patients";
import { HealthStateComponent} from "./Pages/HealthState";


export default function Routes() {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/completeprofile" component={CompleteProfilePage} />
          <Route path="/patients" component={Patients} />
          <Route path="/health-state" component={HealthStateComponent} />
          <Route path="/doctor" />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
