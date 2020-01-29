import { action } from "typesafe-actions";
import { Dispatch } from "redux";

import * as actionTypes from "../consts/actionTypes";
import { edua } from "../eduA/EduA";
import { spec } from "../simulationsData/producer/eduA-scenario";

export const simulationInitialized = (sim: any) => action(actionTypes.SIMULATION_INITALIZED, sim);

export const startSimulation = () => action(actionTypes.START_SIMULATION);

export const initSimulation = () => (dispatch: Dispatch) => {
  const specification = spec.split("\n");
  const scen = edua.parse(specification);
  const sim = edua.newSim(scen);
  dispatch(simulationInitialized(sim));
};
