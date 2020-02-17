import React from "react";
import { TextField, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { BRWrapper, BRButtonWrapper } from "./BuyResourcesStyles";

import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { ORDER_RES } from "../../api/resources/mutation";

export const PRICE = 10;

export const BuyResources: React.FC = observer(() => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);
  const [resToBuy, setResToBuy] = React.useState(0);

  const [orderResource] = useMutation(ORDER_RES);
  const handleResourcesChange = (e: any) => {
    e.persist();
    setResToBuy(e.target.value);
  };

  const hasEnoughMoney = edua.money > PRICE * resToBuy;

  const canBuy = hasEnoughMoney && resToBuy > 0;
  const handleBuyButton = () => {
    //@ts-ignore
    orderResource({ variables: { userId: parseInt(common.userId), qty: parseInt(resToBuy) } });
    edua.execBuyAction(resToBuy);
  };

  const input = (
    <TextField
      id="standard-number"
      label="Resources To Buy"
      type="number"
      placeholder="Resources To Buy"
      variant="outlined"
      value={resToBuy}
      error={!canBuy}
      InputLabelProps={{
        shrink: true
      }}
      onChange={handleResourcesChange}
    />
  );

  const buyButton = (
    <BRButtonWrapper>
      <Button variant="contained" color="primary" onClick={handleBuyButton} disabled={!canBuy && !common.isSimRunning}>
        Order
      </Button>
    </BRButtonWrapper>
  );

  return (
    <BRWrapper>
      {input}
      {buyButton}
    </BRWrapper>
  );
});
