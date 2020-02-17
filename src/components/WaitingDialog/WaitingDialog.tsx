import React from "react";
import { observer } from "mobx-react";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@material-ui/core";

export const WaitingDialog: React.FC<{ open: boolean }> = observer(({ open }) => {
  return (
    <>
      <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" aria-labelledby="waiting-dialog" open={open}>
        <DialogTitle id="waiting-dialog">Waiting For Other Users</DialogTitle>
        <DialogContent dividers>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    </>
  );
});
