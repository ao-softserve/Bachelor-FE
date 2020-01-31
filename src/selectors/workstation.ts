import { simInfoSelector } from "./eduA";

import { RootState } from "../reducers";
import { workstationModuleName } from "../reducers/workstation";

export const workstationSelector = (state: RootState) => state[workstationModuleName];
export const wrokstationControlSelector = (state: RootState) => workstationSelector(state).workstationControl;

export const workstationInfo = (state: RootState) =>
  simInfoSelector(state).workstations
    ? simInfoSelector(state).workstations.find((workstation: { id: number }) => workstation.id === wrokstationControlSelector(state))
    : {};
