import React from "react";
import { observer } from "mobx-react";
import { Typography } from "@material-ui/core";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { IRWrapper } from "./IncomingResourcesStyles";

import { AvailibleRes } from "../AvailibleRes/AvailibleRes";
import { BuyResources } from "../BuyResources/BuyResources";
import { DeliveryProgress } from "../DeliveryProgress/DeliveryProgress";

import { StoreContext } from "../..";
import { RootStore } from "../../stores";

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

export const IncomingResources: React.FC = observer(() => {
  const { resources, common } = React.useContext<RootStore>(StoreContext);

  const { data } = useSubscription(BOUGHT_RES_SUBSCRIPTION);

  React.useEffect(() => {
    const resBought = data && data.boughtResource && data.boughtResource.find((res: Resource) => res.userId === common.userId);
    resBought &&
      resources.addDelivery({
        name: "Incoming Delivery",
        qty: resBought.qty,
        deliveryTime: resBought.deliveryTime,
        deliveryTimeLeft: resBought.deliveryTime
      });
  }, [common.userId, data, resources, resources.addDelivery]);

  const title = <Typography variant="h6">Delivery Control</Typography>;

  return (
    <IRWrapper>
      {title}
      <AvailibleRes />
      <BuyResources />
      <DeliveryProgress />
    </IRWrapper>
  );
});
