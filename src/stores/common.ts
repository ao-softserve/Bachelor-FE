import { observable, action } from "mobx";
import { User } from "../api/resources/query";

export class CommonStore {
  private rootStore: object;

  constructor(rootStore: object) {
    this.rootStore = rootStore;
    this.devMode = false;
    if (this.devMode) {
      this.userName = "Producer 1";
      this.userId = 1;
      this.ipAddress = "localhost";
      this.port = "5000";
    }
  }

  @observable
  public userId: number = 1;

  @action
  public setUserId = (userId: number): void => {
    this.userId = userId;
  };

  @observable
  public userName = "";

  @action
  public setUserName = (name: string) => {
    this.userName = name;
  };

  @observable
  public isSimRunning: boolean = false;

  @action
  public setSimRunning = (): void => {
    this.isSimRunning = true;
  };

  @observable
  public workstationControled: number = 1;

  @action
  public setControledWorkstation = (workstation: number): void => {
    this.workstationControled = workstation;
  };

  @observable
  public bufferControled: number = 1;

  @action
  public setControledBuffer = (buffer: number): void => {
    this.bufferControled = buffer;
  };

  @observable
  public ipAddress = "";

  @action
  public setIpAddress = (ip: string) => {
    this.ipAddress = ip;
  };

  @observable
  public port = "";

  @action
  public setPort = (port: string) => {
    this.port = port;
  };

  public devMode: boolean;

  @observable
  public roundStarted: boolean = false;

  @action
  public startRound = () => {
    this.roundStarted = true;
  };

  @observable
  public userReady: boolean = false;

  @action
  public setUserReady = () => {
    this.userReady = true;
  };

  @observable
  public allUsersReady: boolean = false;

  @action
  public setAllUsersReady = () => {
    this.allUsersReady = true;
  };
}
