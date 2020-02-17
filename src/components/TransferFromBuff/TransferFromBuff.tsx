/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { TextField, Button } from "@material-ui/core";

import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import connections from "../../simulationsData/producer/connections";
import { TransferLabel } from "../TransferLabel/TransferLabel";
import { DestinationPicker } from "../DestinationPicker/DestinationPicker";
import { observer } from "mobx-react";

export const TransferFromBuff: React.FC = observer(() => {
  const { edua } = React.useContext<RootStore>(StoreContext);

  const buffer = edua.buffers!.find((buff) => buff.id === 1);

  const buffConnections = connections.filter((conn) => conn.from === 1);

  const getBuffer = (bufferId: number) => edua.buffers!.find((buff) => buff.id === bufferId);

  const initDestBuffId = getBuffer!(buffConnections![0]!.to)!.id;

  const [transferValue, setTransferValue] = React.useState(0);

  const [hasMultiDest, setHasMultiDest] = React.useState(false);

  const [destBuffId, setDestBuffId] = React.useState(initDestBuffId);

  React.useEffect(() => {
    const destBuffer = buffConnections && getBuffer!(buffConnections[0]!.to);
    destBuffer && setDestBuffId!(destBuffer.id);
    buffConnections!.length > 1 && setHasMultiDest(true);
    //eslint-disable-next-line
  }, [connections]);

  const getBuffByName = (name: string) => edua.buffers.find((buff) => buff.name === name);

  const getConnectionId = (destBuffId: number) => buffConnections!.find((conn) => conn.to === destBuffId)!.id;

  const handleInputChange = (e: any) => {
    e.persist();
    setTransferValue(e.target.value);
  };

  const destinationsNames = buffConnections!.map((conn) => getBuffer(conn.to)!.name);
  const destBuffName = getBuffer!(destBuffId)!.name;
  const productsInBuff = buffer!.products.sort((prodA, prodB) => prodB.product_id - prodA.product_id);

  const handleDestChange = (dest: string) => {
    setDestBuffId(getBuffByName(dest)!.id);
  };

  const handleTransfer = () => {
    setTransferValue(0);
    edua.transfer(getConnectionId(destBuffId), transferValue, productsInBuff[0].product_id);
  };

  const canTransfer: boolean = transferValue > 0 && !!productsInBuff.length && ((hasMultiDest && !!destBuffId) || !hasMultiDest);

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
