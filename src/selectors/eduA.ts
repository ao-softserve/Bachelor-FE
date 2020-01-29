import { RootState } from "../reducers";
import { eduAModuleName } from "../reducers/eduA";
import { edua } from "../eduA/EduA";

export const eduASelector = (state: RootState) => state[eduAModuleName];

// export const timeSelector = (state: RootState) => eduASelector(state).time;
// export const moneySelector = (state: RootState) => eduASelector(state).money;
export const simRunningSelector = (state: RootState) => eduASelector(state).simRunning;
export const simSelector = (state: RootState) => eduASelector(state).sim;

export const simVisInfoSelector = (state: RootState) => (simSelector(state).length ? edua.visInfo(simSelector(state)) : []);
export const simInfoSelector = (state: RootState) => (simSelector(state).length ? edua.info(simSelector(state)) : []);
