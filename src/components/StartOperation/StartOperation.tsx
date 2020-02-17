import React from "react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { Button } from "@material-ui/core";

interface Props {
  products: number;
  wstStatus: "idle" | "not ready" | "operation" | string;
}

enum ButtonInfo {
  start = "Start Operation",
  stop = "Stop Operation"
}

export const StartOperation: React.FC<Props> = ({ products, wstStatus }) => {
  const { edua, common } = React.useContext<RootStore>(StoreContext);

  const [isRunning, setRunningState] = React.useState(false);

  const hanldeClick = () => {
    setRunningState((prevState) => !prevState);
  };

  React.useEffect(() => {
    if (products > 0 && wstStatus === "idle" && isRunning) {
      edua.startOperation(common.workstationControled, common.workstationControled);
    } else if (products === 0) {
      setRunningState(false);
    }
    //eslint-disable-next-line
  }, [common.workstationControled, isRunning, products, wstStatus]);

  const buttonState = isRunning ? ButtonInfo.stop : ButtonInfo.start;

  const button = (
    <Button variant="contained" color="primary" onClick={hanldeClick}>
      {buttonState}
    </Button>
  );

  return <>{button}</>;
};
