import { START_SIMULATION, SET_TIMER, TIME_TICK, SET_SIM, SET_USER_ID } from "../consts/actionTypes";

export const eduAModuleName = "eduA";

export interface EduAState {
  simRunning: boolean;
  sim: any[];
  timer: number | null;
  time: number;
  userId: number;
}

const initState: EduAState = {
  simRunning: false,
  sim: [],
  timer: null,
  time: 0,
  userId: 1
};

export const eduA = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_SIM:
      return { ...state, sim: action.payload };
    case START_SIMULATION:
      return { ...state, simRunning: true };
    case SET_TIMER:
      return { ...state, timer: action.payload };
    case TIME_TICK:
      return { ...state, time: state.time + 1 };
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
