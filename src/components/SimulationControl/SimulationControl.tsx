import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { RootState } from "../../reducers";
import { simInfoSelector, simRunningSelector, timeSelector, moneySelector } from "../../selectors/eduA";
import { startSimulation, startTimer, stopTimer } from "../../actions/eduA";
import { SCWrapper, SCTitle } from "./SimulationControlStyles";

interface SCStoreProps {
  time: number;
  money: string;
  simRunning: boolean | undefined;
  simInfo: any;
}
interface SCDispatchProps {
  startSimulation: typeof startSimulation;
  startTimer: typeof startTimer;
  stopTimer: typeof stopTimer;
}

type ISCProps = SCDispatchProps & SCStoreProps;

const SimulationControl: React.FC<ISCProps> = ({ time, startSimulation, simRunning, simInfo, startTimer, stopTimer, money }) => {
  React.useEffect(() => {
    return () => {
      stopTimer();
    };
  }, [stopTimer]);

  const handleStartClick = () => {
    startSimulation();
    startTimer();
  };

  const title = (
    <SCTitle>
      <Typography variant="h5">Simulation Control</Typography>
    </SCTitle>
  );

  const startButton = (
    <Button color="primary" onClick={handleStartClick} disabled={simRunning} variant="contained">
      Start
    </Button>
  );

  const timeInfo = <Typography variant="body1">{`Time: ${time}`}</Typography>;

  const moneyInfo = <Typography variant="body1">{`Money: ${money}`}</Typography>;

  return (
    <SCWrapper>
      {title}
      {startButton}
      {timeInfo}
      {moneyInfo}
    </SCWrapper>
  );
};

const mapStateToProps = (state: RootState): SCStoreProps => ({
  time: timeSelector(state),
  money: moneySelector(state),
  simRunning: simRunningSelector(state),
  simInfo: simInfoSelector(state)
});
const mapDispatchToprops: SCDispatchProps = {
  startSimulation,
  startTimer,
  stopTimer
};

export default connect<SCStoreProps, SCDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToprops
  //@ts-ignore
)(SimulationControl);
