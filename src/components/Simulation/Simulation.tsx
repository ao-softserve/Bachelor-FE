import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Tree } from "@vx/hierarchy";
import { Group } from "@vx/group";
import { hierarchy, HierarchyNode, HierarchyPointNode } from "d3-hierarchy";

import { SimulationWrapper } from "./SimulationStyles";

import { Links } from "../Links/Links";
import { Nodes } from "../Nodes/Nodes";

import producerSimData, {
  IMachine
} from "../../simulationsData/producer/producerSimulation";
import { spec } from "../../simulationsData/producer/eduA-scenario";
import * as eduAEngine from "../../eduA/EduA";
import { initSimulation } from "../../actions/eduA";
import { RootState } from "../../reducers";

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

interface SDispatchProps {
  initSimulation: typeof initSimulation;
}

interface SStoreProps {}

type ISProps = SStoreProps & SDispatchProps;

const Simulation: React.FC<ISProps> = ({ initSimulation }) => {
  useEffect(() => {
    const specification = spec.split("\n");
    const scenario = eduAEngine.edua.parse(specification);

    initSimulation(eduAEngine.edua.newSim(scenario));
    //eslint-disable-next-line
  }, []);

  const root = hierarchy(producerSimData);

  const group = (
    data: HierarchyNode<IMachine> & HierarchyPointNode<IMachine>
  ) => (
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

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  initSimulation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // @ts-ignore
  Simulation
);
