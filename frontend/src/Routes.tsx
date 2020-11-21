import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import history from "./Components/History";
import Register from "./Pages/SignUpPage";

export default function Routes() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/doctor" />
        </Switch>
      </Router>
    </div>
  );
}
