import { combineReducers } from "redux";
import { eduA, eduAModuleName, EduAState } from "./eduA";

export default combineReducers({
  [eduAModuleName]: eduA
});

export interface RootState {
  [eduAModuleName]: EduAState;
}
