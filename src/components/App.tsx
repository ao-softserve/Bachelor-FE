import React from "react";

import { Header } from "./Header/Header";
import { Simulation } from "./Simulation/Simulation";

const App: React.FC<{}> = props => {
  return (
    <div className="App">
      <Header />
      <Simulation />
    </div>
  );
};

export default App;
