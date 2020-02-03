import { ADD_NEW_DELIVERY, TIME_TICK, ADD_AVAILIBLE_RES, ADD_NEW_SHIPMENT } from "../consts/actionTypes";

export const deliveriesModuleName = "deliveries";

export interface Delivery {
  name: string;
  qty: number;
  deliveryTime: number;
  deliveryTimeLeft: number;
}

export interface Shipment {
  name: string;
  qty: number;
  shipmentTime: number;
  shipmentTimeLeft: number;
}

export interface DeliveriesState {
  deliveries: Delivery[];
  availibleResources: number | string;
  shipments: Shipment[];
}

export const initState: DeliveriesState = {
  deliveries: [],
  availibleResources: 0,
  shipments: []
};

const tickDeliveries = (deliveries: Delivery[]): Delivery[] =>
  deliveries
    .map((delivery) => ({ ...delivery, deliveryTimeLeft: delivery.deliveryTimeLeft - 1 }))
    .filter((delivery) => delivery.deliveryTimeLeft);

const tickShipments = (shipments: Shipment[]): Shipment[] =>
  shipments
    .map((shipment) => ({ ...shipment, shipmentTimeLeft: shipment.shipmentTimeLeft - 1 }))
    .filter((shipment) => shipment.shipmentTimeLeft);

export const deliveriesReducer = (state = initState, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_NEW_SHIPMENT:
      console.log(action);
      return { ...state, shipments: [...state.shipments, action.payload] };
    case ADD_NEW_DELIVERY:
      return { ...state, deliveries: [...state.deliveries, action.payload] };
    case TIME_TICK:
      return { ...state, deliveries: tickDeliveries(state.deliveries), shipments: tickShipments(state.shipments) };
    case ADD_AVAILIBLE_RES:
      return { ...state, availibleResources: action.payload };
    default:
      return state;
  }
};
