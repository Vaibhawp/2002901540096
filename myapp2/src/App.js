import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AllTrains from "./AllTrains";
import SingleTrain from "./SingleTrain";
// import Switch from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">All Trains</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route path="/train/:trainNumber" component={SingleTrain} />
      </Switch>
    </Router>
  );
};

export default App;
