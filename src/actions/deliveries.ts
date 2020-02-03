import { action } from "typesafe-actions";

import * as actionTypes from "../consts/actionTypes";
import { Delivery, Shipment } from "../reducers/deliveries";

export const addNewDelivery = (delivery: Delivery) => action(actionTypes.ADD_NEW_DELIVERY, delivery);
export const addAvailibleResources = (res: number | string) => action(actionTypes.ADD_AVAILIBLE_RES, res);

export const addNewShipment = (shipment: Shipment) => action(actionTypes.ADD_NEW_SHIPMENT, shipment);