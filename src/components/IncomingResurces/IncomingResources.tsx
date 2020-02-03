import React from "react";

import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import AvailibleRes from "../AvailibleRes/AvailibleRes";
import BuyResources from "../BuyResources/BuyResources";
import DeliveryProgress from "../DeliveryProgress/DeliveryProgress";
import { IRWrapper } from "./IncomingResourcesStyles";
import { Typography } from "@material-ui/core";
import { useSubscription } from "@apollo/react-hooks";
import { addNewDelivery } from "../../actions/deliveries";
import gql from "graphql-tag";

interface RStoreProps {
  userId: number;
}
interface RDispatchProps {
  addNewDelivery: typeof addNewDelivery;
}
type RProps = RStoreProps & RDispatchProps;

interface Resource {
  userId: number;
  qty: number;
  deliveryTime: number;
}

const BOUGHT_RES_SUBSCRIPTION = gql`
  subscription BoughtResource {
    boughtResource {
      userId
      qty
      deliveryTime
    }
  }
`;

const IncomingResources: React.FC<RProps> = ({ userId, addNewDelivery }) => {
  const title = <Typography variant="h6">Delivery Control</Typography>;
  const { loading, data } = useSubscription(BOUGHT_RES_SUBSCRIPTION);

  React.useEffect(() => {
    const resBought = data && data.boughtResource && data.boughtResource.find((res: Resource) => res.userId === userId);
    resBought &&
      addNewDelivery({
        name: "Incoming Delivery",
        qty: resBought.qty,
        deliveryTime: resBought.deliveryTime,
        deliveryTimeLeft: resBought.deliveryTime
      });
  }, [addNewDelivery, data, userId]);

  return (
    <IRWrapper>
      {title}
      <AvailibleRes />
      <BuyResources />
      <DeliveryProgress />
    </IRWrapper>
  );
};

const mapStateToProps = (state: RootState): RStoreProps => ({
  userId: userIdSelector(state)
});

export default connect(mapStateToProps, { addNewDelivery })(IncomingResources);
