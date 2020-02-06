import { observable, action, computed, toJS } from "mobx";

import { edua } from "../eduA/EduA";
import { RootStore } from ".";

export class EduaStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable.shallow
  public sim: any[] = [];

  @action
  public setSim = (newSim: any[]): void => {
    //@ts-ignore
    this.sim.replace(newSim);
  };

  @observable
  public simInitialized: boolean = false;

  @action
  public initSim = (spec: string) => {
    const specification = spec.split("\n");
    const scen = edua.parse(specification);
    const sim = edua.newSim(scen);
    this.setSim(sim);
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
  public get money(): number {
    return this.simInfo.assets.find((info: { name: string; value: string }) => info.name === "money").value;
  }

  @computed
  private get products(): any[] {
    return this.simInfo.buffers.find((buff: any) => buff.id === 1).products;
  }

  @computed
  public get rawProducts(): number {
    return this.products.length && this.products.find((prod: any) => prod.product_id === 1).qty;
  }

  @observable
  public timer: number = 0;

  @action
  startTimer = (): void => {
    this.timer = setInterval(() => {
      this.incrementSimTime();
    }, 1000);
  };

  @action
  public stopTimer = (): void => {
    clearInterval(this.timer);
  };

  @observable
  public simTime: number = 0;

  @action
  public incrementSimTime = (): void => {
    const newSim = edua.tick(this.sim);
    this.setSim(newSim);
    this.rootStore.resources.tickResources();
    ++this.simTime;
  };

  @action
  public execSellAction = (qty: number): void => {
    for (let i = 1; i <= qty; i++) {
      const [result, sim] = edua.execAction(this.sim, 2);
      this.setSim(sim);
    }
  };

  @action
  public execBuyAction = (qty: number): void => {
    for (let i = 1; i <= qty; i++) {
      const [result, sim] = edua.execAction(this.sim, 1);
      this.setSim(sim);
    }
  };

  @action
  public addToBuffer = (): void => {
    const [result, newSim] = edua.execAction(this.sim, 3);
    this.setSim(newSim);
  };
}
