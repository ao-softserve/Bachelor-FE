import { EduaStore, IEduaStore } from "./edua";
import { CommonStore } from "./common";
import { ResourcesStore } from "./resources";

export interface RootStore {
  edua: IEduaStore;
  common: CommonStore;
  resources: ResourcesStore;
}

export class RootStore {
  constructor() {
    this.edua = new EduaStore(this);
    this.common = new CommonStore(this);
    this.resources = new ResourcesStore(this);
  }
}

export const rootStore = new RootStore();
