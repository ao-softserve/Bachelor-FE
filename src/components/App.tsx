import React from "react";

import { Header } from "./Header/Header";
import Simulation from "./Simulation/Simulation";
import SimulationControl from "./SimulationControl/SimulationControl";

const App: React.FC<{}> = props => {
  return (
    <div className="App">
      <Header />
      <Simulation />
      <SimulationControl />
    </div>
  );
};

export default App;
