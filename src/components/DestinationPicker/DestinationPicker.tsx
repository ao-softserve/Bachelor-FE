import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

interface Props {
  destinations: string[];
  onChange: (destination: string) => void;
}

export const DestinationPicker: React.FC<Props> = ({ destinations, onChange }) => {
  const [pickedDest, setPickedDest] = React.useState(destinations[0]);

  const handleDestChange = (e: any) => {
    e.persist();
    setPickedDest(e.target.value);
    onChange(e.target.value);
  };

  const label = <FormLabel component="legend">Choose destination</FormLabel>;

  const radioGroup = (
    <RadioGroup aria-label="destinations" name="destinations1" value={pickedDest} onChange={handleDestChange}>
      {destinations.map((dest) => (
        <FormControlLabel value={dest} control={<Radio />} label={dest} />
      ))}
    </RadioGroup>
  );

  const content = (
    <FormControl component="fieldset">
      {label}
      {radioGroup}
    </FormControl>
  );

  return content;
};
