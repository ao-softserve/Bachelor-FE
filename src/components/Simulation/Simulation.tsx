import React, { Component } from "react";
import { Tree } from "@vx/hierarchy";
import { Group } from "@vx/group";
import { Graph, DefaultLink, DefaultNode } from "@vx/network";
import { hierarchy, HierarchyNode } from "d3-hierarchy";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation
} from "d3-force";

import { SimulationWrapper } from "./SimulationStyles";

import { Links } from "../Links/Links";
// import { Nodes } from "../Nodes/Nodes";
import { Node } from "../Node/Node";

import producerSimData, {
  IMachine,
  nodes,
  links
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

export class Simulation extends Component {
  private force: any;

  state = {
    data: {
      nodes,
      links
    }
  };

  componentDidMount() {
    this.force = forceSimulation(this.state.data.nodes)
      .force(
        "link",
        forceLink()
          .id((d: any) => d.id)
          .links(this.state.data.links)
      )
      .force("charge", forceManyBody().strength(-500))
      .force("center", forceCenter(WIDTH / 2, HEIGHT / 2));

    this.force.on("tick", () => this.forceUpdate());
  }

  // const root = hierarchy(producerSimData);

  // const group = (data: HierarchyNode<IMachine>) => (
  //   <Group top={MARGIN.top} left={MARGIN.left}>
  //     <Links links={data.links()} />
  //     <Nodes nodes={data.descendants()} onNodeClick={node => {}} />
  //   </Group>
  // );

  get tree() {
    return (
      <Graph
        graph={{ nodes, links }}
        top={MARGIN.top}
        left={MARGIN.left}
        nodeComponent={DefaultNode}
        linkComponent={DefaultLink}
      />
    );
  }

  render() {
    return (
      <SimulationWrapper>
        <svg width={WIDTH_IN_PX} height={HEIGHT_IN_PX}>
          <rect width={WIDTH_IN_PX} height={HEIGHT_IN_PX} fill="#FFF" />
          {this.tree}
        </svg>
      </SimulationWrapper>
    );
  }
}
