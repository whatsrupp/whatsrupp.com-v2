import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withTracker from "./withTracker";

import Portfolio from "./scenes/portfolio/Portfolio";
import Soundboard from "./scenes/soundboard/Soundboard";
import Landing from "./scenes/landing/Landing";
import Loops from "./scenes/loops/Loops";
import LandGrid from "./scenes/landGrid";

import { Global } from "@emotion/core";

import globalStyles from "./style/global";
import Wheel from "scenes/wheel";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Global styles={globalStyles} />
        <Route path="/" exact component={withTracker(Landing)} />
        <Route path="/portfolio" exact component={withTracker(Portfolio)} />
        <Route path="/soundboard" exact component={withTracker(Soundboard)} />
        <Route path="/loops" exact component={withTracker(Loops)} />
        <Route path="/land-grid" exact component={withTracker(LandGrid)} />
        <Route
          path="/camelot-wheel"
          exact
          component={withTracker(Wheel.Camelot)}
        />
        <Route path="/segment" exact component={withTracker(Wheel.Segment)} />
      </Router>
    </div>
  );
};

export default App;
