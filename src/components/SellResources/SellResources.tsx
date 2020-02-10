//@ts-ignore
import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useMutation } from "@apollo/react-hooks";

import { SRButtonWrapper, SRWrapper } from "./SellResourcesStyle";
import { SELL_RES } from "../../api/resources/mutation";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { observer } from "mobx-react";

export const PRICE = 10;

export const SellResources: React.FC = observer(() => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);

  const [prodToSellQty, setProdToSellQty] = React.useState(0);

  const [sellResources] = useMutation(SELL_RES);
  const handleResourcesChange = (e: any) => {
    e.persist();
    setProdToSellQty(e.target.value);
  };

  const handleSellButton = () => {
    //@ts-ignore
    edua.execSellAction(parseInt(prodToSellQty));
    //@ts-ignore
    sellResources({ variables: { userId: parseInt(common.userId), qty: parseInt(prodToSellQty) } });
  };

  const input = (
    <TextField
      value={prodToSellQty}
      id="standard-number"
      label="Products To Sell"
      type="number"
      placeholder="Products To Buy"
      variant="outlined"
      InputLabelProps={{
        shrink: true
      }}
      onChange={handleResourcesChange}
    />
  );

  const sellButton = (
    <SRButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSellButton}
      // disabled={ !simRunning }
      >
        Sell
      </Button>
    </SRButtonWrapper>
  );

  return (
    <SRWrapper>
      {input}
      {sellButton}
    </SRWrapper>
  );
});
