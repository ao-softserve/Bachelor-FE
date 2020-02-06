import React from "react";
import { Typography } from "@material-ui/core";
import { useSubscription, useQuery } from "@apollo/react-hooks";

import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { AvailibleResource, AVAILIBLE_RESOURCES_SUBSCRIPTION } from "../../api/resources/subscription";
import { AVAILIBLE_RES_QUERY } from "../../api/resources/query";

export const ProductsToSell: React.FC = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  const { loading, data } = useSubscription<{ availibleResourcesChanged: AvailibleResource[] }>(AVAILIBLE_RESOURCES_SUBSCRIPTION);

  const availibleRes = useQuery<{ resources: AvailibleResource[] }>(AVAILIBLE_RES_QUERY);

  const subscriptionResources = data && data.availibleResourcesChanged && data.availibleResourcesChanged;

  const queryResources = availibleRes && availibleRes.data && availibleRes.data.resources;

  const clientResource =
    (subscriptionResources && subscriptionResources.find((res: any) => res.userId === common.userId + 1)) ||
    (queryResources && queryResources.find((res: any) => res.userId === common.userId + 1));

  const myResource =
    (subscriptionResources && subscriptionResources.find((res: any) => res.userId === common.userId)) ||
    (queryResources && queryResources.find((res: any) => res.userId === common.userId));

  const availibleToBuy = <Typography variant="body1">Products customer want to buy: {clientResource && clientResource.toBuy}</Typography>;
  const deliveryTime = <Typography variant="body1">Shipment time to customer: {myResource && myResource.deliveryTime}</Typography>;
  const wantToSell = <Typography variant="body1">Resources want to sell: {myResource && myResource.toSell}</Typography>;
  return (
    <>
      {availibleToBuy}
      {deliveryTime}
      {wantToSell}
    </>
  );
});
