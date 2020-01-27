import { RootState } from "../reducers";
import { eduAModuleName } from "../reducers/eduA";

export const eduASelector = (state: RootState) => state[eduAModuleName];

// export const timeSelector = (state: RootState) => eduASelector(state).time;
// export const moneySelector = (state: RootState) => eduASelector(state).money;
export const simRunningSelector = (state: RootState) =>
  eduASelector(state).simRunning;
export const simInfoSelector = (state: RootState) => eduASelector(state).sim;
