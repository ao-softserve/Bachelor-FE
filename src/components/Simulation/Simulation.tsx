import React, { useRef } from "react";
import { Tree } from "@vx/hierarchy";
import { Group } from "@vx/group";
import { hierarchy, HierarchyNode } from "d3-hierarchy";

import { SimulationWrapper } from "./SimulationStyles";

import { Links } from "../Links/Links";
import { Nodes } from "../Nodes/Nodes";

import producerSimData, {
  IMachine
} from "../../simulationsData/producerSimulation";

const WIDTH = 800;
const HEIGHT = 300;
const WIDTH_IN_PX = `${WIDTH}px`;
const HEIGHT_IN_PX = `${HEIGHT}px`;
const MARGIN = {
  top: 30,
  bottom: 30,
  left: 80,
  right: 80
};
const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;

export const Simulation: React.FC = () => {
  const root = hierarchy(producerSimData);

  const group = (data: HierarchyNode<IMachine>) => (
    <Group top={MARGIN.top} left={MARGIN.left}>
      <Links links={data.links()} />
      <Nodes nodes={data.descendants()} onNodeClick={node => {}} />
    </Group>
  );

  const tree = (
    <Tree
      root={root}
      size={[INNER_HEIGHT, INNER_WIDTH]}
      top={MARGIN.top}
      left={MARGIN.left}
      separation={(a, b) => 1}
    >
      {group}
    </Tree>
  );

  return (
    <SimulationWrapper>
      <svg width={WIDTH_IN_PX} height={HEIGHT_IN_PX}>
        <rect width={WIDTH_IN_PX} height={HEIGHT_IN_PX} fill="#FFF" />
        {tree}
      </svg>
    </SimulationWrapper>
  );
};
