import { SimulationNodeDatum } from "d3-force";

export enum NodeType {
  machine = "machine",
  inputBuffer = "inputBuffer",
  outputBuffer = "outputBuffer"
}

export interface INode extends SimulationNodeDatum {
  name: string;
  type: NodeType;
  id: number;
}

export interface ILink {
  source: number;
  target: number;
}

export interface IMachine {
  name: string;
  type: NodeType;
  children?: IMachine[];
}

const simulationData: IMachine = {
  name: "Dostawca",
  type: NodeType.inputBuffer,
  children: [
    {
      name: "Maszyna 1",
      type: NodeType.machine,
      children: [{ name: "Magazyn", type: NodeType.outputBuffer }]
    },
    {
      name: "Maszyna 2",
      type: NodeType.machine,
      children: [
        {
          name: "Maszyna 3",
          type: NodeType.machine,
          children: [{ name: "Magazyn", type: NodeType.outputBuffer }]
        }
      ]
    }
  ]
};

export default simulationData;

export const nodes: INode[] = [
  {
    name: "Dostawca",
    type: NodeType.inputBuffer,
    id: 1
  },
  {
    name: "Maszyna 1",
    type: NodeType.machine,
    id: 2
  },
  {
    name: "Magazyn",
    type: NodeType.outputBuffer,
    id: 5
  },
  {
    name: "Maszyna 2",
    type: NodeType.machine,
    id: 3
  },
  {
    name: "Maszyna 3",
    type: NodeType.machine,
    id: 4
  }
];

export const links: ILink[] = [
  { source: 1, target: 2 },
  { source: 2, target: 5 },
  { source: 1, target: 3 },
  { source: 3, target: 4 },
  { source: 4, target: 5 }
];
