import React from "react";
import { Dialog, DialogTitle, DialogActions, Button, TextField, DialogContent } from "@material-ui/core";
import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";

export const ConnectionInfo: React.FC = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  const [ip, setIp] = React.useState("");
  const [port, setPort] = React.useState("");

  const handleIpChange = (e: any) => {
    setIp(e.target.value);
  };

  const handlePortChange = (e: any) => {
    setPort(e.target.value);
  };

  const handleOk = () => {
    common.setIpAddress(ip);
    common.setPort(port);
  };
  const canSubmit = ip && port;

  const button = (
    <Button onClick={handleOk} color="primary" disabled={!canSubmit} variant="contained">
      Ok
    </Button>
  );

  return (
    <>
      <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" aria-labelledby="choose-user-title" open={true}>
        <DialogTitle id="choose-user-title">Provide Connections Info</DialogTitle>
        <DialogContent dividers>
          <TextField value={ip} onChange={handleIpChange} label="Server IP" />
          <TextField value={port} onChange={handlePortChange} label="Server Port" />
        </DialogContent>
        <DialogActions>{button}</DialogActions>
      </Dialog>
    </>
  );
});
