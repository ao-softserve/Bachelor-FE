import React from "react";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { useSubscription, useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import { ARWrapper } from "./AvailibleResourcesStyle";

interface ARStoreProps {
  userId: number;
}
interface ARDispatchProps {}
type ARProps = ARStoreProps & ARDispatchProps;

const AVAILIBLE_RESOURCES_SUBSCRIPTION = gql`
  subscription onAvailibleResourceChange {
    availibleResourcesChanged {
      toSell
      toBuy
      userId
      deliveryTime
    }
  }
`;

const AVAILIBLE_RES_QUERY = gql`
  query Resources {
    resources {
      toSell
      toBuy
      userId
      deliveryTime
    }
  }
`;

const AvailibleRes: React.FC<ARProps> = ({ userId }) => {
  const { loading, data } = useSubscription(AVAILIBLE_RESOURCES_SUBSCRIPTION);

  const availibleRes = useQuery(AVAILIBLE_RES_QUERY);

  const subAvailibleRes = data && data.availibleResourcesChanged;
  const subscriptionResource = subAvailibleRes && subAvailibleRes.find((res: any) => res.userId === userId - 1);

  const hasResources = availibleRes && availibleRes.data && availibleRes.data.resources;

  const supplierResource = hasResources && hasResources.find((res: any) => res.userId === userId - 1);

  const myResources = hasResources && hasResources.find((res: any) => res.userId === userId);
  const mySubscriptionRes = (subAvailibleRes && subAvailibleRes.find((res: any) => res.userId === userId)) || myResources;
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
};

const mapStateToProps = (state: RootState): ARStoreProps => ({
  userId: userIdSelector(state)
});

export default connect(mapStateToProps)(AvailibleRes);
