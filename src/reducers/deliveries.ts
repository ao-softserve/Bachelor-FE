import { ADD_NEW_DELIVERY, TIME_TICK, ADD_AVAILIBLE_RES } from "../consts/actionTypes";

export const deliveriesModuleName = "deliveries";

export interface Delivery {
  name: string;
  qty: number;
  deliveryTime: number;
  deliveryTimeLeft: number;
}

export interface DeliveriesState {
  deliveries: Delivery[];
  availibleResources: number | string;
}

export const initState: DeliveriesState = {
  deliveries: [],
  availibleResources: 0
};

const tickDeliveries = (deliveries: Delivery[]): Delivery[] =>
  deliveries
    .map((delivery) => ({ ...delivery, deliveryTimeLeft: delivery.deliveryTimeLeft - 1 }))
    .filter((delivery) => delivery.deliveryTimeLeft);

export const deliveriesReducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_NEW_DELIVERY:
      return { ...state, deliveries: [...state.deliveries, action.payload] };
    case TIME_TICK:
      return { ...state, deliveries: tickDeliveries(state.deliveries) };
    case ADD_AVAILIBLE_RES:
      return { ...state, availibleResources: action.payload };
    default:
      return state;
  }
};
