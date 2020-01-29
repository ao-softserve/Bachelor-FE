import React from "react";
import { connect } from "react-redux";

import { RootState } from "../reducers";
import { simVisInfoSelector, simInfoSelector } from "../selectors/eduA";
import { draw } from "./visualization";
import { initSimulation } from "../actions/eduA";

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

const Visualization: React.FC<VisualizationProps> = ({ visInfo, simInfo, initSim }) => {
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
    initSim();
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!!simInfo && visInfo.length) {
      draw(VIS_CONTAINER_NAME, handlers, simInfo, visInfo, DIMENTIONS);
    }
  }, [handlers, simInfo, visInfo]);

  return <div style={{ height: "90vh", width: "50%", overflow: "hidden" }} id={VIS_CONTAINER_NAME}></div>;
};

const mapStateToProps = (state: RootState): StoreProps => ({
  visInfo: simVisInfoSelector(state),
  simInfo: simInfoSelector(state)
});

const mapDispatchToProps: DispatchProps = {
  initSim: initSimulation
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
