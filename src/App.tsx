import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Portfolio from "./scenes/portfolio/Portfolio";
import Soundboard from "./scenes/soundboard/Soundboard";
import Landing from "./scenes/landing/Landing";

import { Global } from "@emotion/core";

import globalStyles from "./style/global";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Global styles={globalStyles} />
        <Route path="/" exact component={Landing} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/soundboard" exact component={Soundboard} />
      </Router>
    </div>
  );
};

export default App;
