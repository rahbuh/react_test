import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Expenses from "./components/layout/Expenses";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user/expenses" component={Expenses} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
