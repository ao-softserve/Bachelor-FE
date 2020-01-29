import React from "react";

import { Header } from "./Header/Header";
import SimulationControl from "./SimulationControl/SimulationControl";

import Visualisation from "../visualization/Visualisation";
// import Simulation from "./Simulation/Simulation";

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      {/* <Simulation /> */}
      <Visualisation />
      <SimulationControl />
    </div>
  );
};

export default App;
