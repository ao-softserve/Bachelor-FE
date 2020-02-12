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
import { ChooseUser } from "./ChooseUser/ChooseUser";

const App: React.FC = observer(() => {
  const {
    common,
    edua: { simInitialized, initSim }
  } = React.useContext<RootStore>(StoreContext);

  React.useEffect(() => {
    initSim(spec);
    //eslint-disable-next-line
  }, [])

  const content = simInitialized && !!common.userName && (
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
  );

  return (
    <div className="App">
      <Header />
      {!common.userName && <ChooseUser />}
      {content}
    </div>
  );
});

export default App;
