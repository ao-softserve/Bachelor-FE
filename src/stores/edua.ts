import { observable, action, computed } from "mobx";

import { edua } from "../eduA/EduA";
import { RootStore } from ".";
import { SimInfo, SimBuffer, SimProduct, SimAsset, SimWorkstation, SimResource } from "../consts/types";

export interface IEduaStore {
  sim: any[];
  simInitialized: boolean;
  readonly simInfo: SimInfo;
  readonly visInfo: any[];
  readonly money: number;
  readonly inputProducts: SimProduct[];
  readonly outputProducts: SimProduct[];
  readonly rawProducts: number;
  readonly readyProducts: number;
  readonly workstations: SimWorkstation[];
  readonly buffers: SimBuffer[];
  readonly simResources: SimResource[];
  simTime: number;
  timer: number;
  initSim: (spec: string) => void;
  startTimer: () => void;
  stopTimer: () => void;
  setSim: (newSim: any[]) => void;
  incrementSimTime: () => void;
  execSellAction: (qty: number) => void;
  execBuyAction: (qty: number) => void;
  addToBuffer: () => void;
  assignWstResource: (resourceId: number, wstId: number) => void;
  startMode: (wstId: number) => void;
  transfer: (connectionId: number, qty: number, productId: number) => void;
  startOperation: (wstId: number, operationId: number) => void;
}

export class EduaStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable.shallow
  public sim = [];

  @action
  public setSim = (newSim: any[]) => {
    //@ts-ignore
    this.sim.replace(newSim);
  };

  @observable
  public simInitialized = false;

  @action
  public initSim = (spec: string) => {
    const specification = spec.split("\n");
    const scen = edua.parse(specification);
    const sim = edua.newSim(scen);
    this.setSim(sim);
    // this.initWstsAssignedResource();
    this.simInitialized = true;
  };

  @computed
  public get simInfo() {
    return edua.info(this.sim);
  }

  @computed
  public get visInfo() {
    return edua.visInfo(this.sim);
  }

  @computed
  public get money() {
    return this.simInfo.assets.find((asset: SimAsset) => asset.name === "money").value;
  }

  @computed
  public get inputProducts() {
    return this.simInfo.buffers.find((buff: SimBuffer) => buff.id === 1).products;
  }

  @computed
  public get outputProducts() {
    return this.simInfo.buffers.find((buff: SimBuffer) => buff.id === this.simInfo.buffers.length).products;
  }

  @computed
  public get rawProducts() {
    return this.inputProducts.length && this.inputProducts.find((prod: SimProduct) => prod.product_id === 1).qty;
  }

  @computed
  public get readyProducts() {
    const readyProducts = this.outputProducts.length && this.outputProducts.find((prod: SimProduct) => prod.product_id === 2);
    return readyProducts ? readyProducts.qty : 0;
  }

  @computed
  public get workstations() {
    return this.simInfo.workstations;
  }

  @computed
  public get buffers() {
    return this.simInfo.buffers;
  }

  @observable
  public timer = 0;

  @action
  startTimer = () => {
    this.timer = setInterval(() => {
      this.incrementSimTime();
    }, 1000);
  };

  @action
  public stopTimer = () => {
    clearInterval(this.timer);
  };

  @observable
  public simTime: number = 0;

  @action
  public incrementSimTime = () => {
    const newSim = edua.tick(this.sim);
    this.setSim(newSim);
    this.rootStore.resources.tickResources();
    ++this.simTime;
  };

  @action
  public execSellAction = (qty: number) => {
    for (let i = 1; i <= qty; i++) {
      const [result, sim] = edua.execAction(this.sim, 2);
      this.setSim(sim);
    }
  };

  @action
  public execBuyAction = (qty: number) => {
    for (let i = 1; i <= qty; i++) {
      const [result, sim] = edua.execAction(this.sim, 1);
      this.setSim(sim);
    }
  };

  @action
  public addToBuffer = () => {
    const [result, newSim] = edua.execAction(this.sim, 3);
    this.setSim(newSim);
  };

  @computed
  public get simResources() {
    return this.simInfo.resources;
  }

  @computed
  private get wstsIdArray() {
    return this.workstations.map((wst: SimWorkstation) => ({
      wstId: wst.id
    }));
  }

  @action
  private getResource = (resId: number) => this.simResources.find((res: SimResource) => res.id === resId);

  @action
  public assignWstResource = (resourceId: number, wstId: number) => {
    // const item = this.wstsAssignedResource.find((wst: AssignedResource) => wst.wstId === wstId);
    const item = this.workstations.find((wst: SimWorkstation) => wst.id === wstId);
    if (item && item.resources) {
      const [res, sim] = edua.releaseResource(this.sim, wstId, item.resources.id, 1);
      this.setSim(sim);
    }

    //The last parameter stands for resource qty
    const [result, newSim] = edua.assignResource(this.sim, wstId, resourceId, 1);
    this.setSim(newSim);
  };

  @action
  public startMode = (wstId: number) => {
    //Last parameter for modeId
    const [result, sim] = edua.startMode(this.sim, wstId, wstId);
    this.setSim(sim);
  };

  @action
  public transfer = (connectionId: number, qty: number, productId: number) => {
    //@ts-ignore
    const [result, sim] = edua.transfer(this.sim, connectionId, productId, parseInt(qty));
    this.setSim(sim);
  };

  @action
  public startOperation = (wstId: number, operationId: number) => {
    const [result, sim] = edua.startOperation(this.sim, wstId, operationId);
    this.setSim(sim);
  };
}
