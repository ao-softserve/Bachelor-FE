import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";

export const Header: React.FC = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="h6">Symulacja Frontend</Typography>
          <Typography variant="h6">{common.userName}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
});
