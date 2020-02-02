import React from "react";

import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import AvailibleRes from "../AvailibleRes/AvailibleRes";
import BuyResources from "../BuyResources/BuyResources";
import DeliveryProgress from "../DeliveryProgress/DeliveryProgress";
import { IRWrapper } from "./IncomingResourcesStyles";
import { Typography } from "@material-ui/core";

interface RStoreProps {
  userId: number;
}
interface RDispatchProps {}
type IRProps = RStoreProps & RDispatchProps;

const IncomingResources: React.FC<IRProps> = ({ userId }) => {
  const title = <Typography variant="h6">Delivery Control</Typography>;

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

export default connect(mapStateToProps)(IncomingResources);
