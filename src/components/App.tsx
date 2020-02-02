import React from "react";

import { Header } from "./Header/Header";
import SimulationControl from "./SimulationControl/SimulationControl";

import Visualisation from "../visualization/Visualisation";
import { Simulation } from "./AppStyles";
import IncomingResources from "./IncomingResurces/IncomingResources";

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      <Simulation>
        <Visualisation />
        <SimulationControl />
      </Simulation>
      <IncomingResources />
    </div>
  );
};

export default App;
