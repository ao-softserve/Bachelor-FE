import React, { useContext } from "react";
import { observer } from "mobx-react";

import { draw } from "./visualization";
import { initSimulation } from "../actions/eduA";
import { StoreContext } from "..";
import { RootStore } from "../stores";

interface StoreProps {
  visInfo: any[];
  simInfo: any;
}

interface DispatchProps {
  initSim: typeof initSimulation;
}

interface VisDimentions {
  width: number;
  height: number;
  scale: number;
}

type VisualizationProps = StoreProps & DispatchProps;

const VIS_CONTAINER_NAME = "VIS_CONTAINER";
const DIMENTIONS: VisDimentions = {
  scale: 2,
  width: 4000,
  height: 4000
};

export const Visualization: React.FC = observer(() => {
  const {
    edua: { simInfo, visInfo }
  } = useContext<RootStore>(StoreContext);

  const handlers = [
    [
      "workstation",
      1,
      () => {
        alert("Workstation callback");
      }
    ],
    [
      "buffer",
      1,
      () => {
        alert("Buffer callback");
      }
    ]
  ];

  React.useEffect(() => {
    if (!!simInfo && visInfo.length) {
      draw(VIS_CONTAINER_NAME, handlers, simInfo, visInfo, DIMENTIONS);
    }
  }, [handlers, simInfo, visInfo]);

  return <div style={{ height: "90vh", width: "70%", overflow: "hidden" }} id={VIS_CONTAINER_NAME}></div>;
});
