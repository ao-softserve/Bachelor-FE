//@ts-ignore
import React from "react";
import { Typography, LinearProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector } from "../../selectors/eduA";
import { Shipment } from "../../reducers/deliveries";
import { shipmentsSelector } from "../../selectors/deliveries";
import { execSimSell } from "../../actions/eduA";
import { SPWrapper } from "./ShipmentProgressStyles";

interface SPStoreProps {
  userId: number;
  shipments: Shipment[];
}
interface SPDispatchProps {
  execSimSell: typeof execSimSell;
}
type SPProps = SPStoreProps & SPDispatchProps;

const ShipmentProgress: React.FC<SPProps> = ({ shipments, execSimSell }) => {
  console.log(shipments);
  React.useEffect(() => {
    shipments && shipments.map((shipment) => shipment.shipmentTimeLeft === 1 && execSimSell(shipment.qty));
  }, [execSimSell, shipments]);

  const progressBar = (value: number) => <LinearProgress variant="determinate" value={value} />;
  const shipmentName = (name: string) => <Typography variant="body2">{name}</Typography>;
  const shipmentValue = (value: number) => <Typography variant="body2">{value}</Typography>;
  const normalizeValue = (timeLeft: number, shipTime: number) => (timeLeft / shipTime) * 100;
  return (
    <SPWrapper>
      {shipments.map((shipment, index) => (
        <div key={`del-${index}`}>
          {shipmentName(shipment.name)}
          {shipment.shipmentTimeLeft && progressBar(normalizeValue(shipment.shipmentTimeLeft, shipment.shipmentTime))}
          {shipmentValue(shipment.qty)}
        </div>
      ))}
    </SPWrapper>
  );
};

const mapStateToProps = (state: RootState): SPStoreProps => ({
  userId: userIdSelector(state),
  shipments: shipmentsSelector(state)
});

//@ts-ignore
export default connect(mapStateToProps, { execSimSell })(ShipmentProgress);
