import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { RootState } from "../../reducers";
import {
  // timeSelector,
  simRunningSelector,
  simInfoSelector
} from "../../selectors/eduA";
import { startSimulation } from "../../actions/eduA";

interface SCStoreProps {
  // time: string | undefined;
  // money: string | undefined;
  simRunning: boolean | undefined;
  simInfo: any;
}
interface SCDispatchProps {
  startSimulation: typeof startSimulation;
}

type ISCProps = SCDispatchProps & SCStoreProps;

const SimulationControl: React.FC<ISCProps> = ({
  // time,
  startSimulation,
  simRunning,
  simInfo
  // money
}) => {
  console.log(simInfo);
  const handleStartClick = () => {
    startSimulation();
  };

  return (
    <>
      <Button color="primary" onClick={handleStartClick} disabled={simRunning}>
        Start
      </Button>
      {/* <Typography variant="h5">{`Time: ${time}`}</Typography>
      <Typography variant="h5">{`Money: ${money}`}</Typography> */}
    </>
  );
};

const mapStateToProps = (state: RootState): SCStoreProps => ({
  // time: timeSelector(state),
  // money: "money",
  simRunning: simRunningSelector(state),
  simInfo: simInfoSelector(state)
});
const mapDispatchToprops: SCDispatchProps = {
  startSimulation
};

export default connect<SCStoreProps, SCDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToprops
  //@ts-ignore
)(SimulationControl);
