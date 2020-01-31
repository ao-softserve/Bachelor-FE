import { action } from "typesafe-actions";
import { Dispatch } from "redux";

import * as actionTypes from "../consts/actionTypes";
import { edua } from "../eduA/EduA";
import { eduAModuleName } from "../reducers/eduA";
import { setSim } from "./eduA";
import { RootState } from "../reducers";

export const setWorkstationControl = (workstation: number) => action(actionTypes.SET_WORKSTATION_CONTROL, workstation);

export const startMode = (workstationId: number, mode: number) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];

  console.log(workstationId, mode);
  const [result, newSim] = edua.startMode(sim, workstationId, mode);
  if (result === false) {
    throw new Error("Cannot start the mode!");
  }
  dispatch(setSim(newSim));
};

export const setupWorkstation = (workstationId: number, mode: number) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];

  const result = edua.readyModes(sim, workstationId);
  if (!result.includes(workstationId)) {
    throw new Error("The mode is not ready!");
  }
  //@ts-ignore
  dispatch(startMode(workstationId, mode));
};

export const assignResources = (workstationId: number, resourceId: number, resourcesNo: number) => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const { sim } = getState()[eduAModuleName];

  const [result, newSim] = edua.assignResource(sim, workstationId, resourceId, resourcesNo);
  if (result === false) throw new Error("Cannot assign the resource!");
  dispatch(setSim(newSim));
};

export const transferResource = (productId: number, connectionId: number, qty: number) => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const { sim } = getState()[eduAModuleName];

  const [result, newSim] = edua.transfer(sim, productId, connectionId, qty);

  if (result !== true) throw new Error("Couldn't transfer the raw material!");
  dispatch(setSim(newSim));
};

export const startOperation = (workstationId: number, operationId: number) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];

  const [result, newSim] = edua.startOperation(sim, workstationId, operationId);

  if (result !== true) throw new Error("Couldn't start the operation!");

  dispatch(setSim(newSim));
};
