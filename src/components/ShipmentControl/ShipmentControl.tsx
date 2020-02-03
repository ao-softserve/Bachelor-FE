import React from "react";

import { Typography } from "@material-ui/core";
import { SCWrapper } from "./ShipmentControlStyles";
import ProductsToSell from "../ProductsToSell/ProductsToSell";
import SellResourcse from "../SellResources/SellResourcse";
import { addNewShipment } from "../../actions/deliveries";
import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";
import { userIdSelector } from "../../selectors/eduA";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import ShipmentProgress from "../ShipmentProgress/ShipmentProgress";

interface SCStoreProps {
  userId: number;
}

interface SCispatchProps {
  addNewShipment: typeof addNewShipment;
}

type SCrops = SCStoreProps & SCispatchProps;

interface Resource {
  userId: number;
  qty: number;
  deliveryTime: number;
}

const SOLD_RES_SUBSCRIPTION = gql`
  subscription SoldResource {
    soldResource {
      userId
      qty
      deliveryTime
    }
  }
`;

const ShipmentControl: React.FC<SCrops> = ({ userId, addNewShipment }) => {
  const title = <Typography variant="h6">Shipment Control</Typography>;

  const { loading, data } = useSubscription(SOLD_RES_SUBSCRIPTION);

  React.useEffect(() => {
    const resSold = data && data.soldResource && data.soldResource.find((res: Resource) => res.userId === userId);
    resSold &&
      addNewShipment({
        name: "Outcoming Shipment",
        qty: resSold.qty,
        shipmentTime: resSold.deliveryTime,
        shipmentTimeLeft: resSold.deliveryTime
      });
  }, [addNewShipment, data, userId]);

  return (
    <SCWrapper>
      {title}
      <ProductsToSell />
      <SellResourcse />
      <ShipmentProgress />
    </SCWrapper>
  );
};

const mapStateToProps = (state: RootState): SCStoreProps => ({
  userId: userIdSelector(state)
});

export default connect(mapStateToProps, { addNewShipment })(ShipmentControl);
