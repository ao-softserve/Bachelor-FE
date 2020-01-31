import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { RootState } from "../../reducers";
import { wrokstationControlSelector, workstationInfo } from "../../selectors/workstation";
import { simRunningSelector } from "../../selectors/eduA";
import { setupWorkstation } from "../../actions/workstation";

interface WCStoreProps {
  workstationControl: number;
  workstationInfo: any;
  simRunning: boolean;
}
interface WCDispatchProps {
  setupWorkstation: typeof setupWorkstation;
}
type WCProps = WCStoreProps & WCDispatchProps;

//FIXME: Mocked modes for workstations - need to some how check modes for workstations
const WORKSTATION_MODES: { [keys: number]: number } = {
  1: 1,
  2: 2,
  3: 3
};

const WorkstationControl: React.FC<WCProps> = ({ workstationControl, workstationInfo, simRunning, setupWorkstation }) => {
  const resources = workstationInfo.resources && workstationInfo.resources.length ? workstationInfo.resources[0] : 0;

  const status = workstationInfo.status ? workstationInfo.status : "Not ready";

  const handleSetupButton = () => {
    setupWorkstation(workstationControl, WORKSTATION_MODES[workstationControl]);
  };

  const workstationTitle = <Typography variant="h5">{`Workstation ${workstationControl}`}</Typography>;

  const workstationStatus = <Typography variant="body1">{`Status: ${status}`}</Typography>;

  const workstationResources = <Typography variant="body1">{`Resources: ${resources}`}</Typography>;

  const workstationSetupButton = (
    <Button color="primary" variant="contained" onClick={handleSetupButton} disabled={!simRunning}>
      Setup
    </Button>
  );
  return (
    <>
      {workstationTitle}
      {workstationStatus}
      {workstationSetupButton}
      {workstationResources}
    </>
  );
};

const mapStateToProps = (state: RootState): WCStoreProps => ({
  workstationControl: wrokstationControlSelector(state),
  workstationInfo: workstationInfo(state),
  simRunning: simRunningSelector(state)
});

//@ts-ignore
export default connect(mapStateToProps, { setupWorkstation })(WorkstationControl);
