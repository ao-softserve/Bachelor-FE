import React from "react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { Button } from "@material-ui/core";

export const StartOperation: React.FC = () => {
  const { edua, common } = React.useContext<RootStore>(StoreContext);

  const hanldeStart = () => {
    edua.startOperation(common.workstationControled, common.workstationControled);
  };

  const button = (
    <Button variant="contained" color="primary" onClick={hanldeStart}>
      Start Operation
    </Button>
  );

  return <>{button}</>;
};
