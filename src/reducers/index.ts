import { combineReducers } from "redux";
import { eduA, eduAModuleName, EduAState } from "./eduA";
import { deliveriesModuleName, DeliveriesState, deliveriesReducer } from "./deliveries";

export default combineReducers({
  [eduAModuleName]: eduA,
  [deliveriesModuleName]: deliveriesReducer
});

export interface RootState {
  [eduAModuleName]: EduAState;
  [deliveriesModuleName]: DeliveriesState;
}
