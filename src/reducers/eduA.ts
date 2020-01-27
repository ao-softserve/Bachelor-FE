import * as eduAEngine from "../eduA/EduA";
import { INIT_SIMULATION, START_SIMULATION } from "../consts/actionTypes";

export const eduAModuleName = "eduA";

export interface EduAState {
  simRunning?: boolean;
  sim?: any[];
}

const initState: EduAState = {
  simRunning: false,
  sim: []
};

export const eduA = (
  state: EduAState = initState,
  action: { type: string; payload: any }
) => {
  //eslint-disable-next-line
  console.log(action.type);
  switch (action.type) {
    case INIT_SIMULATION:
      return { ...state, sim: action.payload };
    case START_SIMULATION:
      return { ...state, simRunning: true };
    default:
      return state;
  }
};
