import React from "react";
import { Typography } from "@material-ui/core";
import gql from "graphql-tag";
import { useSubscription, useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import { addAvailibleResources } from "../../actions/deliveries";
import { ARWrapper } from "./AvailibleResourcesStyle";

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
      qty
      userId
      deliveryTime
    }
  }
`;

const AVAILIBLE_RES_QUERY = gql`
  query Resources {
    resources {
      qty
      userId
      deliveryTime
    }
  }
`;

const AvailibleRes: React.FC<ARProps> = ({ userId, addAvailibleResources }) => {
  const { loading, data } = useSubscription(AVAILIBLE_RESOURCES_SUBSCRIPTION);

  const availibleRes = useQuery(AVAILIBLE_RES_QUERY);
  const subscriptionResource =
    data && data.availibleResourcesChanged && data.availibleResourcesChanged.find((res: any) => res.userId === userId - 1);
  const queryResource = availibleRes && availibleRes.data && availibleRes.data.resources.find((res: any) => res.userId === userId - 1);
  const resource = subscriptionResource ? subscriptionResource : queryResource;

  React.useEffect(() => {
    resource && addAvailibleResources(resource.qty);
  }, [addAvailibleResources, resource]);

  const availibleToBuy = <Typography variant="body1">Resources availible to buy: {resource && resource.qty}</Typography>;
  const deliveryTime = <Typography variant="body1">Delivery Time: {resource && resource.deliveryTime}</Typography>;

  return (
    <ARWrapper>
      {availibleToBuy}
      {deliveryTime}
    </ARWrapper>
  );
};

const mapStateToProps = (state: RootState): ARStoreProps => ({
  userId: userIdSelector(state)
});

export default connect(mapStateToProps, { addAvailibleResources })(AvailibleRes);
