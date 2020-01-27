import { action } from "typesafe-actions";

import * as actionTypes from "../consts/actionTypes";

export const initSimulation = (sim: any) =>
  action(actionTypes.INIT_SIMULATION, sim);

export const startSimulation = () => action(actionTypes.START_SIMULATION);
