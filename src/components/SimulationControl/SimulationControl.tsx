import React from "react";
import { observer } from "mobx-react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { SCWrapper, SCTitle } from "./SimulationControlStyles";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";

export const SimulationControl: React.FC = observer(() => {
  const { edua, common } = React.useContext<RootStore>(StoreContext);

  React.useEffect(() => {
    return () => {
      edua.stopTimer();
    };
  }, [edua, edua.stopTimer]);

  const handleStartClick = () => {
    common.setSimRunning();
    edua.startTimer();
  };

  const title = (
    <SCTitle>
      <Typography variant="h5">Simulation Control</Typography>
    </SCTitle>
  );

  const startButton = (
    <Button color="primary" onClick={handleStartClick} disabled={common.isSimRunning} variant="contained">
      Start
    </Button>
  );

  const timeInfo = <Typography variant="body1">{`Time: ${edua.simTime}`}</Typography>;

  const moneyInfo = <Typography variant="body1">{`Money: ${edua.money}`}</Typography>;

  const rawProductsInfo = <Typography variant="body1">{`Raw Products: ${edua.rawProducts}`}</Typography>;

  return (
    <SCWrapper>
      {title}
      {startButton}
      {timeInfo}
      {moneyInfo}
      {rawProductsInfo}
    </SCWrapper>
  );
});
