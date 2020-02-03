import React from "react";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { useSubscription, useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import { addAvailibleResources } from "../../actions/deliveries";

interface ARStoreProps {
  userId: number;
}
interface ARDispatchProps {
  addAvailibleResources: typeof addAvailibleResources;
}
type ARProps = ARStoreProps & ARDispatchProps;

const AVAILIBLE_RESOURCES_SUBSCRIPTION = gql`
  subscription onAvailibleResourceChange {
    availibleResourcesChanged {
      userId
      deliveryTime
      toBuy
      toSell
    }
  }
`;

const AVAILIBLE_RES_QUERY = gql`
  query Resources {
    resources {
      userId
      deliveryTime
      toBuy
      toSell
    }
  }
`;

const ProductsToSell: React.FC<ARProps> = ({ userId, addAvailibleResources }) => {
  const { loading, data } = useSubscription(AVAILIBLE_RESOURCES_SUBSCRIPTION);

  const availibleRes = useQuery(AVAILIBLE_RES_QUERY);

  const subscriptionResources = data && data.availibleResourcesChanged && data.availibleResourcesChanged;

  const queryResources = availibleRes && availibleRes.data && availibleRes.data.resources;

  const clientResource =
    (subscriptionResources && subscriptionResources.find((res: any) => res.userId === userId + 1)) ||
    (queryResources && queryResources.find((res: any) => res.userId === userId + 1));

  const myResource =
    (subscriptionResources && subscriptionResources.find((res: any) => res.userId === userId)) ||
    (queryResources && queryResources.find((res: any) => res.userId === userId));

  React.useEffect(() => {
    clientResource && addAvailibleResources(clientResource.qty);
  }, [addAvailibleResources, clientResource]);

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
};

const mapStateToProps = (state: RootState): ARStoreProps => ({
  userId: userIdSelector(state)
});

//@ts-ignore
export default connect(mapStateToProps, { addAvailibleResources })(ProductsToSell);
