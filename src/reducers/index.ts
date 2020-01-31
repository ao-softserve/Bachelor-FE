import { combineReducers } from "redux";
import { eduA, eduAModuleName, EduAState } from "./eduA";
import { workstationReducer, workstationModuleName, WorkstationState } from "./workstation";

export default combineReducers({
  [eduAModuleName]: eduA,
  [workstationModuleName]: workstationReducer
});

export interface RootState {
  [eduAModuleName]: EduAState;
  [workstationModuleName]: WorkstationState;
}
