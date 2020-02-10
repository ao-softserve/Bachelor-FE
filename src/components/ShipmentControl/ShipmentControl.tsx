import React from "react";
import { useSubscription } from "@apollo/react-hooks";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";

import { SCWrapper } from "./ShipmentControlStyles";
import { ProductsToSell } from "../ProductsToSell/ProductsToSell";
import { SellResources } from "../SellResources/SellResources";
import { ShipmentProgress } from "../ShipmentProgress/ShipmentProgress";

import { SOLD_RES_SUBSCRIPTION, SoldResource } from "../../api/resources/subscription";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";

interface Resource {
  userId: number;
  qty: number;
  deliveryTime: number;
}

export const ShipmentControl: React.FC = observer(() => {
  const { common, resources } = React.useContext<RootStore>(StoreContext);

  const title = <Typography variant="h6">Shipment Control</Typography>;

  const { data } = useSubscription<SoldResource>(SOLD_RES_SUBSCRIPTION);

  React.useEffect(() => {
    const resSold = data && data.soldResource && data.soldResource.find((res: Resource) => res.userId === common.userId);
    resSold &&
      resources.addShipment({
        name: "Outcoming Shipment",
        qty: resSold.qty,
        shipmentTime: resSold.deliveryTime,
        shipmentTimeLeft: resSold.deliveryTime
      });
  }, [resources.addShipment, data, common.userId, resources]);

  return (
    <SCWrapper>
      {title}
      <ProductsToSell />
      <SellResources />
      <ShipmentProgress />
    </SCWrapper>
  );
});
