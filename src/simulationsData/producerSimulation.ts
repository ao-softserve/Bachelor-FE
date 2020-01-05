export enum NodeType {
  machine = "machine",
  inputBuffer = "inputBuffer",
  outputBuffer = "outputBuffer"
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
