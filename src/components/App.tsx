import React from "react";

import { Header } from "./Header/Header";
import { SimulationControl } from "./SimulationControl/SimulationControl";

import { Visualization } from "../visualization/Visualisation";
import { Simulation, ProductExchange } from "./AppStyles";
import { IncomingResources } from "./IncomingResurces/IncomingResources";
import { ShipmentControl } from "./ShipmentControl/ShipmentControl";
import { observer } from "mobx-react";
import { StoreContext } from "..";
import { RootStore } from "../stores";
import { spec } from "../simulationsData/producer/eduA-scenario";
import { WorkstationControl } from "./WorkstationControl/WorkstationControl";

const App: React.FC = observer(() => {
  const {
    edua: { simInitialized, initSim }
  } = React.useContext<RootStore>(StoreContext);

  React.useEffect(() => {
    initSim(spec);
    //eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      {simInitialized && (
        <div>
          <Simulation>
            <Visualization />
            <div>
              <SimulationControl />
              <WorkstationControl />
            </div>
          </Simulation>
          <ProductExchange>
            <IncomingResources />
            <ShipmentControl />
          </ProductExchange>
        </div>
      )}
    </div>
  );
});

export default App;
