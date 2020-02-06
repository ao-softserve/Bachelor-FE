import { observable, action } from "mobx";
import { RootStore } from ".";

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

export class ResourcesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  public deliveries: Delivery[] = [];

  @action
  public addDelivery = (delivery: Delivery): void => {
    this.deliveries = [...this.deliveries, delivery];
  };

  @observable
  public shipments: Shipment[] = [];

  @action
  public addShipment = (shipment: Shipment): void => {
    this.rootStore.edua.execSellAction(shipment.qty);
    this.shipments = [...this.shipments, shipment];
  };

  private addDeliveryToBuff = (delivery: Delivery): void => {
    for (let i = 0; i < delivery.qty; i++) {
      this.rootStore.edua.addToBuffer();
    }
  };

  @action
  public tickResources = (): void => {
    this.deliveries = this.deliveries
      .map((delivery) => ({ ...delivery, deliveryTimeLeft: delivery.deliveryTimeLeft - 1 }))
      .filter((delivery) => {
        if (delivery.deliveryTimeLeft === 0) {
          this.addDeliveryToBuff(delivery);
          return false;
        }
        return true;
      });
    this.shipments = this.shipments
      .map((shipment) => ({ ...shipment, shipmentTimeLeft: shipment.shipmentTimeLeft - 1 }))
      .filter((shipment) => shipment.shipmentTimeLeft !== 0);
  };
}
