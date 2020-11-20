import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/doctor" />
        </Switch>
      </Router>
    </div>
  );
}
