import { observable, action } from "mobx";

export class CommonStore {
  private rootStore: object;

  constructor(rootStore: object) {
    this.rootStore = rootStore;
  }

  @observable
  public userId: number = 1;

  @action
  public setUserId = (userId: number): void => {
    this.userId = userId;
  };

  @observable
  public isSimRunning: boolean = false;

  @action
  public setSimRunning = (): void => {
    this.isSimRunning = true;
  };
}
