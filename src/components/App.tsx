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
import { ApolloProvider } from "@apollo/react-hooks";
import { GraphQLClient } from "../apollo/apollo";
import { ConnectionInfo } from "./ConnectionInfo/ConnectionInfo";
import { SimulateFinalTaker } from "./SimulateFinalTaker/SimulateFinalTaker";

const App: React.FC = observer(() => {
  const {
    common,
    edua: { simInitialized, initSim }
  } = React.useContext<RootStore>(StoreContext);

  React.useEffect(() => {
    initSim(spec);
    //eslint-disable-next-line
  }, [])


  const client = () => {
    if (common.port && common.ipAddress) {
      return GraphQLClient(common.ipAddress, common.port);
    }
  };

  const simulation = simInitialized && (
    <>
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
        <SimulateFinalTaker />
      </ProductExchange>
    </>
  );

  const content = common.port && common.ipAddress && (
    // @ts-ignore
    <ApolloProvider client={client()}>
      {!common.userName && <ChooseUser />}
      {simulation}
    </ApolloProvider>
  );

  return (
    <div className="App">
      <Header />
      {!common.port && !common.ipAddress && <ConnectionInfo />}

      {content}
    </div>
  );
});

export default App;
