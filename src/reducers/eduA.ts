import { START_SIMULATION, SIMULATION_INITALIZED } from "../consts/actionTypes";

export const eduAModuleName = "eduA";

export interface EduAState {
  simRunning: boolean;
  sim: any[];
}

const initState: EduAState = {
  simRunning: false,
  sim: []
};

export const eduA = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SIMULATION_INITALIZED:
      return { ...state, sim: action.payload };
    case START_SIMULATION:
      return { ...state, simRunning: true };
    default:
      return state;
  }
};
