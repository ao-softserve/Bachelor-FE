import React from "react";

import { Header } from "./Header/Header";
import SimulationControl from "./SimulationControl/SimulationControl";

import Visualisation from "../visualization/Visualisation";
import { Simulation, ProductExchange } from "./AppStyles";
import IncomingResources from "./IncomingResurces/IncomingResources";
import ShipmentControl from "./ShipmentControl/ShipmentControl";

const App: React.FC<{}> = (props) => {
  return (
    <div className="App">
      <Header />
      <Simulation>
        <Visualisation />
        <SimulationControl />
      </Simulation>
      <ProductExchange>
        <IncomingResources />
        <ShipmentControl />
      </ProductExchange>
    </div>
  );
};

export default App;
