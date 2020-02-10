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

export interface SimResource {
  id: number;
  name: string;
  availible: number;
  operation_time: number;
}

export interface SimProduct {
  product_id: number;
  qty: number;
}

export interface SimBuffer {
  id: number;
  name: string;
  products: SimProduct[];
}

export interface SimAsset {
  id: number;
  name: string;
  value: number;
}

export interface SimWorkstation {
  id: number;
  name: string;
  resources: any[];
  buffer_id: number;
  macine_mode: string;
  status: string;
  time?: number;
  totalTime?: number;
}

export interface SimInfo {
  resources: SimResource[];
  buffers: SimBuffer[];
  assets: SimAsset[];
  workstations: SimWorkstation[];
}

export interface AssignedResource {
  wstId: number;
  resource?: SimResource;
}
