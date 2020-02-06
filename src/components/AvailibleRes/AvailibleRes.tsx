import React from "react";
import { Typography } from "@material-ui/core";

import { useSubscription, useQuery } from "@apollo/react-hooks";

import { ARWrapper } from "./AvailibleResourcesStyle";
import { AVAILIBLE_RESOURCES_SUBSCRIPTION } from "../../api/resources/subscription";
import { AVAILIBLE_RES_QUERY } from "../../api/resources/query";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { observer } from "mobx-react";

export const AvailibleRes: React.FC = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  const { loading, data } = useSubscription(AVAILIBLE_RESOURCES_SUBSCRIPTION);

  const availibleRes = useQuery(AVAILIBLE_RES_QUERY);

  const subAvailibleRes = data && data.availibleResourcesChanged;
  const subscriptionResource = subAvailibleRes && subAvailibleRes.find((res: any) => res.userId === common.userId - 1);

  const hasResources = availibleRes && availibleRes.data && availibleRes.data.resources;

  const supplierResource = hasResources && hasResources.find((res: any) => res.userId === common.userId - 1);

  const myResources = hasResources && hasResources.find((res: any) => res.userId === common.userId);
  const mySubscriptionRes = (subAvailibleRes && subAvailibleRes.find((res: any) => res.userId === common.userId)) || myResources;
  const resource = subscriptionResource ? subscriptionResource : supplierResource;

  const availibleToBuy = <Typography variant="body1">Resources supplier want to sell: {resource && resource.toSell}</Typography>;
  const deliveryTime = <Typography variant="body1">Delivery Time: {resource && resource.deliveryTime}</Typography>;
  const wantToBuy = <Typography variant="body1">Resources want to buy: {mySubscriptionRes && mySubscriptionRes.toBuy}</Typography>;

  return (
    <ARWrapper>
      {availibleToBuy}
      {deliveryTime}
      {wantToBuy}
    </ARWrapper>
  );
});
