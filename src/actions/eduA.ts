import { action } from "typesafe-actions";
import { Dispatch } from "redux";

import * as actionTypes from "../consts/actionTypes";
import { edua } from "../eduA/EduA";
import { spec } from "../simulationsData/producer/eduA-scenario";
import { RootState } from "../reducers";
import { eduAModuleName } from "../reducers/eduA";

export const setSim = (sim: any) => action(actionTypes.SET_SIM, sim);

export const startSimulation = () => action(actionTypes.START_SIMULATION);

export const initSimulation = () => (dispatch: Dispatch) => {
  const specification = spec.split("\n");
  const scen = edua.parse(specification);
  const sim = edua.newSim(scen);
  dispatch(setSim(sim));
};

export const timeTick = () => action(actionTypes.TIME_TICK);

export const tick = () => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];
  const newSim = edua.tick(sim);
  dispatch(setSim(newSim));
  dispatch(timeTick());
};

export const setTimer = (timer: number | null) => action(actionTypes.SET_TIMER, timer);

export const startTimer = () => (dispatch: Dispatch) => {
  //@ts-ignore
  const timer = setInterval(() => dispatch(tick()), 1000);
  dispatch(setTimer(timer));
};

export const stopTimer = () => (dispatch: Dispatch, getState: () => RootState) => {
  const { timer } = getState()[eduAModuleName];
  //@ts-ignore
  clearInterval(timer);
  dispatch(setTimer(null));
};
