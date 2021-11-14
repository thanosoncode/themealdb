import "./main.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import MealDetails from "./pages/MealDetails";
import Home from "./pages/Home";
import Api from "./pages/Api";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/meal/:id">
            <MealDetails />
          </Route>
          <Route path="/api">
            <Api />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
