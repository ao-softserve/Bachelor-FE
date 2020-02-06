//@ts-ignore
import React from "react";
import { Typography, LinearProgress } from "@material-ui/core";

import { DPWrapper } from "./DeliveryProgressStyle";
import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";

export const DeliveryProgress: React.FC = observer(() => {
  const { resources } = React.useContext<RootStore>(StoreContext);

  const progressBar = (value: number) => <LinearProgress variant="determinate" value={value} />;
  const deliveryName = (name: string) => <Typography variant="body2">{name}</Typography>;
  const deliveryValue = (value: number) => <Typography variant="body2">{value}</Typography>;
  const normalizeValue = (timeLeft: number, delTime: number) => (timeLeft / delTime) * 100;
  return (
    <DPWrapper>
      {resources.deliveries.map((delivery, index) => (
        <div key={`del-${index}`}>
          {deliveryName(delivery.name)}
          {delivery.deliveryTimeLeft && progressBar(normalizeValue(delivery.deliveryTimeLeft, delivery.deliveryTime))}
          {deliveryValue(delivery.qty)}
        </div>
      ))}
    </DPWrapper>
  );
});
