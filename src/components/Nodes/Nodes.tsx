import React from "react";
import { Group } from "@vx/group";

import { Node } from "../Node/Node";
import { ICON_HEIGHT, ICON_WIDTH } from "../Node/NodeStyles";
import { NodeText } from "./NodesStyles";
import { HierarchyPointNode } from "d3-hierarchy";
import { IMachine, NodeType } from "../../simulationsData/producerSimulation";

interface INodesProps {
  nodes: HierarchyPointNode<IMachine>[];
  onNodeClick?: (node: any) => void;
}

export const Nodes: React.FC<INodesProps> = ({ nodes, onNodeClick }) => {
  const handleNodeClick = (node: any) => {
    onNodeClick && onNodeClick(node);
  };

  const nodesPositions = {
    [NodeType.machine]: {
      top: ICON_HEIGHT / 2 - 7,
      left: ICON_WIDTH / 2 + 2,
      nodeTextPos: {
        x: "30",
        y: "-5"
      }
    },
    [NodeType.inputBuffer]: {
      top: 0,
      left: 15,
      nodeTextPos: {
        x: "0",
        y: "-20"
      }
    },
    [NodeType.outputBuffer]: {
      top: 0,
      left: 15,
      nodeTextPos: {
        x: "0",
        y: "-20"
      }
    }
  };

  return (
    <>
      {nodes.map((node, nodeIndex) => (
        <Group
          top={node.x - nodesPositions[node.data.type].top}
          left={node.y - nodesPositions[node.data.type].left}
          key={`node-${nodeIndex}`}
        >
          <NodeText
            x={nodesPositions[node.data.type].nodeTextPos.x}
            y={nodesPositions[node.data.type].nodeTextPos.y}
          >
            {node.data.name}
          </NodeText>
          {/* <Node node={node} onClick={() => handleNodeClick(node)} /> */}
        </Group>
      ))}
    </>
  );
};
