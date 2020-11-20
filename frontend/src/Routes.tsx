import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/doctor" />
        </Switch>
      </Router>
    </div>
  );
}
