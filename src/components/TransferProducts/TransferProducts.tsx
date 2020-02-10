/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { TextField, Button } from "@material-ui/core";

import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import connections from "../../simulationsData/producer/connections";
import { TransferLabel } from "../TransferLabel/TransferLabel";
import { DestinationPicker } from "../DestinationPicker/DestinationPicker";
import { observer } from "mobx-react";

export const TransferProducts: React.FC = observer(() => {
  const { edua, common } = React.useContext<RootStore>(StoreContext);
  const currentWst = edua.workstations.find((wst) => wst.id === common.workstationControled);

  const wstConnections = currentWst && connections.filter((conn) => conn.from === currentWst!.buffer_id);

  const getBuffer = (bufferId: number) => edua.buffers!.find((buff) => buff.id === bufferId);

  const initDestBuffId = getBuffer!(wstConnections![0]!.to)!.id;

  const [transferValue, setTransferValue] = React.useState(0);

  const [hasMultiDest, setHasMultiDest] = React.useState(false);

  const [destBuffId, setDestBuffId] = React.useState(initDestBuffId);

  React.useEffect(() => {
    const destBuffer = wstConnections && getBuffer!(wstConnections[0]!.to);
    destBuffer && setDestBuffId!(destBuffer.id);
    wstConnections!.length > 1 && setHasMultiDest(true);
    //eslint-disable-next-line
  }, [connections, common.workstationControled]);

  const getBuffByName = (name: string) => edua.buffers.find((buff) => buff.name === name);

  const getConnectionId = (destBuffId: number) => wstConnections!.find((conn) => conn.to === destBuffId)!.id;

  const handleInputChange = (e: any) => {
    e.persist();
    setTransferValue(e.target.value);
  };

  const destinationsNames = wstConnections!.map((conn) => getBuffer(conn.to)!.name);
  const destBuffName = getBuffer!(destBuffId)!.name;
  const productsInWst = getBuffer(currentWst!.buffer_id)!.products.sort((prodA, prodB) => prodB.product_id - prodA.product_id);

  const handleDestChange = (dest: string) => {
    setDestBuffId(getBuffByName(dest)!.id);
  };
  const handleTransfer = () => {
    setTransferValue(0);
    edua.transfer(getConnectionId(destBuffId), transferValue, productsInWst[0].product_id);
  };

  const canTransfer: boolean = transferValue > 0 && !!productsInWst.length && ((hasMultiDest && !!destBuffId) || !hasMultiDest);

  const destinations = <DestinationPicker destinations={destinationsNames} onChange={handleDestChange} />;

  const label = <TransferLabel destination={destBuffName} />;

  const input = <TextField type="number" variant="outlined" value={transferValue} onChange={handleInputChange} />;

  const button = (
    <Button variant="contained" color="primary" onClick={handleTransfer} disabled={!canTransfer}>
      Transfer
    </Button>
  );

  return (
    <>
      {hasMultiDest && destinations}
      {label}
      {input}
      {button}
    </>
  );
});
