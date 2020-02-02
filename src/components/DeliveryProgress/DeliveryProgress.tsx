//@ts-ignore
import React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import { Delivery } from "../../reducers/deliveries";
import { deliveriesSelector } from "../../selectors/deliveries";
import { addResourcesToBuff } from "../../actions/eduA";
import { DPWrapper } from "./DeliveryProgressStyle";

interface DPStoreProps {
  userId: number;
  deliveries: Delivery[];
}
interface DPDispatchProps {
  addResourcesToBuff: typeof addResourcesToBuff;
}
type DPProps = DPStoreProps & DPDispatchProps;

const DeliveryProgress: React.FC<DPProps> = ({ deliveries, addResourcesToBuff }) => {
  React.useEffect(() => {
    deliveries && addResourcesToBuff(deliveries.filter((delivery) => delivery.deliveryTimeLeft === 1));
  }, [addResourcesToBuff, deliveries]);

  const progressBar = (value: number) => <LinearProgress variant="determinate" value={value} />;
  const deliveryName = (name: string) => <Typography variant="body2">{name}</Typography>;
  const deliveryValue = (value: number) => <Typography variant="body2">{value}</Typography>;
  const normalizeValue = (timeLeft: number, delTime: number) => (timeLeft / delTime) * 100;
  return (
    <DPWrapper>
      {deliveries.map((delivery, index) => (
        <div key={`del-${index}`}>
          {deliveryName(delivery.name)}
          {delivery.deliveryTimeLeft && progressBar(normalizeValue(delivery.deliveryTimeLeft, delivery.deliveryTime))}
          {deliveryValue(delivery.qty)}
        </div>
      ))}
    </DPWrapper>
  );
};

const mapStateToProps = (state: RootState): DPStoreProps => ({
  userId: userIdSelector(state),
  deliveries: deliveriesSelector(state)
});

//@ts-ignore
export default connect(mapStateToProps, { addResourcesToBuff })(DeliveryProgress);
