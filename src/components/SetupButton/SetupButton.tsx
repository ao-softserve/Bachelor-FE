import React from "react";

import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { Button } from "@material-ui/core";

export const SetupButton: React.FC = () => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);

  const currentWorkstation = edua.workstations.find((wst) => wst.id === common.workstationControled);

  //eslint-disable-next-line
  const hasAssignedRes = currentWorkstation!.resources.length;

  const handleSetup = () => {
    edua.startMode(common.workstationControled);
  };

  const setupButton = (
    <Button variant="contained" color="primary" disabled={!hasAssignedRes} onClick={handleSetup}>
      Setup
    </Button>
  );

  return <>{setupButton}</>;
};
