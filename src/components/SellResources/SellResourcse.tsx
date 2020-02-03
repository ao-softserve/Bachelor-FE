//@ts-ignore
import React from "react";
import { TextField, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector, simRunningSelector, moneySelector } from "../../selectors/eduA";

import { addNewDelivery } from "../../actions/deliveries";
import { execSimBuy } from "../../actions/eduA";
import { availibleResourcesSelector } from "../../selectors/deliveries";
import { SRButtonWrapper, SRWrapper } from "./SellResourcesStyle";

interface SRStoreProps {
  userId: number;
  simRunning: boolean;
  money: number | string;
  availibleResources: number | string;
}
interface SRDispatchProps {
  addNewDelivery: typeof addNewDelivery;
  execSimBuy: typeof execSimBuy;
}
type ARProps = SRStoreProps & SRDispatchProps;

export const PRICE = 10;
const SELL_RES = gql`
  mutation SellResource($userId: Int!, $qty: Int!) {
    sellResources(userId: $userId, qty: $qty) {
      userId
      toSell
      toBuy
      deliveryTime
    }
  }
`;

const SellResources: React.FC<ARProps> = ({ userId, execSimBuy, money }) => {
  const [prodToSellQty, setProdToSellQty] = React.useState(0);

  const [sellResources, { data }] = useMutation(SELL_RES);
  const handleResourcesChange = (e: any) => {
    e.persist();
    setProdToSellQty(e.target.value);
  };

  const handleBuyButton = () => {
    //@ts-ignore
    sellResources({ variables: { userId: parseInt(userId), qty: parseInt(prodToSellQty) } });
    // execSimSell(prodToSellQty);
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

  const buyButton = (
    <SRButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyButton}
        // disabled={ !simRunning }
      >
        Sell
      </Button>
    </SRButtonWrapper>
  );

  return (
    <SRWrapper>
      {input}
      {buyButton}
    </SRWrapper>
  );
};

const mapStateToProps = (state: RootState): SRStoreProps => ({
  userId: userIdSelector(state),
  simRunning: simRunningSelector(state),
  money: moneySelector(state),
  availibleResources: availibleResourcesSelector(state)
});
//@ts-ignore
export default connect(mapStateToProps, { addNewDelivery, execSimBuy })(SellResources);
