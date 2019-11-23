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
import * as routes from "./routes";
import globalStyles from "./style/global";
import Wheel from "scenes/wheel";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Global styles={globalStyles} />
        <Route path={routes.HOME} exact component={withTracker(Landing)} />
        <Route
          path={routes.PORTFOLIO}
          exact
          component={withTracker(Portfolio)}
        />
        <Route
          path={routes.SOUNDBOARD}
          exact
          component={withTracker(Soundboard)}
        />
        <Route path={routes.LOOPS} exact component={withTracker(Loops)} />
        <Route
          path={routes.LAND_GRID}
          exact
          component={withTracker(LandGrid)}
        />
        <Route
          path={routes.CAMELOT_WHEEL}
          exact
          component={withTracker(Wheel.Camelot)}
        />
        <Route
          path={routes.SEGMENT}
          exact
          component={withTracker(Wheel.Segment)}
        />
      </Router>
    </div>
  );
};

export default App;
