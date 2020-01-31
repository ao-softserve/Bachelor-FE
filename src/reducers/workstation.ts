import { SET_WORKSTATION_CONTROL } from "../consts/actionTypes";

export const workstationModuleName = "workstation";

export interface WorkstationState {
  workstationControl: number;
}

const initState: WorkstationState = {
  workstationControl: 1
};

export const workstationReducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case SET_WORKSTATION_CONTROL:
      return { ...state, workstationControl: action.payload };
    default:
      return state;
  }
};
