//@ts-ignore
import React from "react";
import { Typography, LinearProgress } from "@material-ui/core";

import { SPWrapper } from "./ShipmentProgressStyles";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { observer } from "mobx-react";

export const ShipmentProgress: React.FC = observer(() => {
  const { resources } = React.useContext<RootStore>(StoreContext);

  const progressBar = (value: number) => <LinearProgress variant="determinate" value={value} />;
  const shipmentName = (name: string) => <Typography variant="body2">{name}</Typography>;
  const shipmentValue = (value: number) => <Typography variant="body2">{value}</Typography>;
  const normalizeValue = (timeLeft: number, shipTime: number) => (timeLeft / shipTime) * 100;
  return (
    <SPWrapper>
      {resources.shipments.map((shipment, index) => (
        <div key={`del-${index}`}>
          {shipmentName(shipment.name)}
          {progressBar(normalizeValue(shipment.shipmentTimeLeft, shipment.shipmentTime))}
          {shipmentValue(shipment.qty)}
        </div>
      ))}
    </SPWrapper>
  );
});
