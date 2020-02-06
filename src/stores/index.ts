import { EduaStore } from "./edua";
import { CommonStore } from "./common";
import { ResourcesStore } from "./resources";

export interface RootStore {
  edua: EduaStore;
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
