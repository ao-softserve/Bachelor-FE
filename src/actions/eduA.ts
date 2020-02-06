import { action } from "typesafe-actions";
import { Dispatch } from "redux";

import * as actionTypes from "../consts/actionTypes";
import { edua } from "../eduA/EduA";
import { spec } from "../simulationsData/producer/eduA-scenario";
import { RootState } from "../reducers";
import { eduAModuleName } from "../reducers/eduA";
import { Delivery } from "../reducers/deliveries";

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

export const setUserId = (userId: number) => action(actionTypes.SET_USER_ID, userId);

export const addResourcesToBuff = (deliveries: Delivery[]) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];
  let simulation = sim;
  deliveries.map((delivery) => {
    for (let i = 1; i <= delivery.qty; i++) {
      const [result, newSim] = edua.execAction(simulation, 3);
      dispatch(setSim(newSim));
      simulation = newSim;
    }
  });
};

export const execSimBuy = (qty: number | string) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];
  let simulation = sim;

  for (let i = 1; i <= qty; i++) {
    const [result, newSim] = edua.execAction(simulation, 1);
    dispatch(setSim(newSim));
    simulation = newSim;
  }
};

export const execSimSell = (qty: number | string) => (dispatch: Dispatch, getState: () => RootState) => {
  const { sim } = getState()[eduAModuleName];
  let simulation = sim;

  for (let i = 1; i <= qty; i++) {
    const [result, newSim] = edua.execAction(simulation, 2);
    dispatch(setSim(newSim));
    simulation = newSim;
  }
};