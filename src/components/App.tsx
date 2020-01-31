import React from "react";

import { Header } from "./Header/Header";

import Visualisation from "../visualization/Visualisation";
import { Simulation } from "./AppStyles";
import { ControlPanel } from "./ControlPanel/ControlPanel";

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      <Simulation>
        <Visualisation />
        <ControlPanel />
      </Simulation>
    </div>
  );
};

export default App;
