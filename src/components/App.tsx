import React from "react";

import { Header } from "./Header/Header";
import SimulationControl from "./SimulationControl/SimulationControl";

import Visualisation from "../visualization/Visualisation";

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      <Visualisation />
      <SimulationControl />
    </div>
  );
};

export default App;
