import React, { useContext } from "react";
import { observer } from "mobx-react";

import { draw } from "./visualization";
import { StoreContext } from "..";
import { RootStore } from "../stores";

interface StoreProps {
  visInfo: any[];
  simInfo: any;
}

interface VisDimentions {
  width: number;
  height: number;
  scale: number;
}

interface VisInfoItem {
  type: "workstation" | "buffer";
  id: number;
}

const VIS_CONTAINER_NAME = "VIS_CONTAINER";
const DIMENTIONS: VisDimentions = {
  scale: 2,
  width: 4000,
  height: 4000
};

export const Visualization: React.FC = observer(() => {
  const { edua, common } = useContext<RootStore>(StoreContext);
  const handleClick = (item: VisInfoItem) => {
    if (item.type === "workstation") {
      common.setControledWorkstation(item.id);
    } else if (item.type === "buffer") common.setControledBuffer(item.id);
  };

  const handlers = edua.visInfo.map((item: VisInfoItem) => [item.type, item.id, () => handleClick(item)]);

  React.useEffect(() => {
    if (!!edua.simInfo && edua.visInfo.length) {
      draw(VIS_CONTAINER_NAME, handlers, edua.simInfo, edua.visInfo, DIMENTIONS);
    }
  }, [edua.simInfo, edua.visInfo, handlers]);

  return <div style={{ height: "90vh", width: "70%", overflow: "hidden" }} id={VIS_CONTAINER_NAME}></div>;
});
