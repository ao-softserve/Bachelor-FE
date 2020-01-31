import React from "react";

import SimulationControl from "../SimulationControl/SimulationControl";
import WorkstationControl from "../WorkstationControl/WorkstationControl";
import { CPWrapper } from "./ControlPanelStyles";

export const ControlPanel: React.FC = () => {
  return (
    <CPWrapper>
      <SimulationControl />
      <WorkstationControl />
    </CPWrapper>
  );
};
