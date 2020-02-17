import React from "react";
import { observer } from "mobx-react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { SCWrapper, SCTitle } from "./SimulationControlStyles";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { TransferFromBuff } from "../TransferFromBuff/TransferFromBuff";
import { useMutation, useSubscription } from "@apollo/react-hooks";
import { SET_USER_READY, SetUserReady } from "../../api/resources/mutation";
import { WaitingDialog } from "../WaitingDialog/WaitingDialog";
import { USERS_CHANGED_SUBSCRIPTION } from "../../api/resources/subscription";

export const SimulationControl: React.FC = observer(() => {
  const { edua, common } = React.useContext<RootStore>(StoreContext);

  const [setUserReady] = useMutation<SetUserReady>(SET_USER_READY);

  const { data } = useSubscription(USERS_CHANGED_SUBSCRIPTION);

  const subscripionUsers = data && data.usersChanged;

  const areUsersReady = !!subscripionUsers && !subscripionUsers.filter((usr: any) => usr.ready === false).length;

  const canStart = areUsersReady && common.userReady;

  React.useEffect(() => {
    if (canStart) {
      common.setSimRunning();
      edua.startTimer();
      common.setAllUsersReady();
    }
    //eslint-disable-next-line
  }, [canStart]);

  React.useEffect(() => {
    return () => {
      edua.stopTimer();
    };
    //eslint-disable-next-line
  }, []);

  const handleStartClick = () => {
    setUserReady({ variables: { userId: common.userId } });
    common.setUserReady();
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

  const readyProducts = <Typography variant="body1">{`Ready products: ${edua.readyProducts}`}</Typography>;

  const transferFromBuff = <TransferFromBuff />;

  const waitingDialog = <WaitingDialog open={!areUsersReady && common.userReady} />;

  return (
    <SCWrapper>
      {title}
      {startButton}
      {timeInfo}
      {moneyInfo}
      {rawProductsInfo}
      {readyProducts}
      {transferFromBuff}
      {waitingDialog}
    </SCWrapper>
  );
});
