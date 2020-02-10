export interface ScenarioResource {
  id: number;
  name: string;
  availible: number;
  operationTime: number;
}

const scenarioResources: ScenarioResource[] = [
  { id: 1, name: "red", availible: 1, operationTime: 0 },
  { id: 2, name: "green", availible: 1, operationTime: 0 },
  { id: 3, name: "blue", availible: 1, operationTime: 0 }
];

export default scenarioResources;
// -- Resources id, name, available, operation_time
// 1,      red,    1,0
// 2,      green,  1,0
// 3,      blue,   1,0
