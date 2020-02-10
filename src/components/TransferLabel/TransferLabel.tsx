import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  destination: string;
}

export const TransferLabel: React.FC<Props> = ({ destination }) => {
  const label = <Typography variant="body2">{`Transfer products to: ${destination}`}</Typography>;

  return label;
};
