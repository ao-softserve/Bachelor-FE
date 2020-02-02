import React from "react";
import { TextField, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector, simRunningSelector, moneySelector } from "../../selectors/eduA";
import { BRWrapper, BRButtonWrapper } from "./BuyResourcesStyles";
import { addNewDelivery } from "../../actions/deliveries";
import { execSimBuy } from "../../actions/eduA";
import { availibleResourcesSelector } from "../../selectors/deliveries";

interface ARStoreProps {
  userId: number;
  simRunning: boolean;
  money: number | string;
  availibleResources: number | string;
}
interface ARDispatchProps {
  addNewDelivery: typeof addNewDelivery;
  execSimBuy: typeof execSimBuy;
}
type ARProps = ARStoreProps & ARDispatchProps;

export const PRICE = 10;
const BUY_RES = gql`
  mutation BuyResources($userId: Int!, $qty: Int!) {
    buyResource(userId: $userId, qty: $qty) {
      message
      resource {
        userId
        qty
        deliveryTime
      }
    }
  }
`;

const AvailibleRes: React.FC<ARProps> = ({ userId, addNewDelivery, simRunning, execSimBuy, money, availibleResources }) => {
  const [resToBuy, setResToBuy] = React.useState(0);
  const [buyResource, { data }] = useMutation(BUY_RES);
  const handleResourcesChange = (e: any) => {
    e.persist();
    setResToBuy(e.target.value);
  };
  React.useEffect(() => {
    const res = data && data.buyResource && data.buyResource.resource;

    res &&
      addNewDelivery({
        name: "Incoming Delivery",
        qty: res.qty,
        deliveryTime: res.deliveryTime,
        deliveryTimeLeft: res.deliveryTime
      });
  }, [addNewDelivery, data]);

  const hasEnoughMoney = money > PRICE * resToBuy;

  const hasEnoughResources = availibleResources >= resToBuy;

  const canBuy = hasEnoughMoney && hasEnoughResources && resToBuy > 0;
  const handleBuyButton = () => {
    //@ts-ignore
    buyResource({ variables: { userId: parseInt(userId), qty: parseInt(resToBuy) } });
    execSimBuy(resToBuy);
  };

  const input = (
    <TextField
      id="standard-number"
      label="Resources To Buy"
      type="number"
      placeholder="Resources To Buy"
      variant="outlined"
      error={!canBuy}
      InputLabelProps={{
        shrink: true
      }}
      onChange={handleResourcesChange}
    />
  );

  const buyButton = (
    <BRButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyButton}
        disabled={
          !canBuy
          // !simRunning
        }
      >
        Buy
      </Button>
    </BRButtonWrapper>
  );

  return (
    <BRWrapper>
      {input}
      {buyButton}
    </BRWrapper>
  );
};

const mapStateToProps = (state: RootState): ARStoreProps => ({
  userId: userIdSelector(state),
  simRunning: simRunningSelector(state),
  money: moneySelector(state),
  availibleResources: availibleResourcesSelector(state)
});
//@ts-ignore
export default connect(mapStateToProps, { addNewDelivery, execSimBuy })(AvailibleRes);
