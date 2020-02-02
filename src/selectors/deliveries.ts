import { RootState } from "../reducers";
import { deliveriesModuleName } from "../reducers/deliveries";

export const deliveriesRootSelector = (state: RootState) => state[deliveriesModuleName];

export const deliveriesSelector = (state: RootState) => deliveriesRootSelector(state).deliveries;
export const availibleResourcesSelector = (state: RootState) => deliveriesRootSelector(state).availibleResources;
