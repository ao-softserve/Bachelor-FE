import React from "react";
import { StoreContext } from "../..";
import { ListItem, Button, List, Typography } from "@material-ui/core";
import { RootStore } from "../../stores";
import { SimResource } from "../../consts/types";

interface ResState {
  selected: boolean;
  resource: SimResource;
}

export const SimResources: React.FC = () => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);

  const resInitState: ResState[] = edua.simResources.map((resource) => ({ resource, selected: false }));

  const [resState, setResState] = React.useState<ResState[]>(resInitState);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resetList = () => {
    setResState(resInitState);
  };

  React.useEffect(() => {
    resetList();
    //eslint-disable-next-line
  }, [common.workstationControled]);

  const handleResourceClick = (res: ResState) => {
    setResState(
      resState.map((resourceState) =>
        resourceState.resource.id === res.resource.id ? { ...res, selected: !res.selected } : { ...resourceState, selected: false }
      )
    );
  };

  const handleAssignClick = () => {
    const selectedRes = resState.find((res) => res.selected);
    //eslint-disable-next-line
    edua.assignWstResource(selectedRes!.resource.id, common.workstationControled)
    resetList();
  };

  const hasSelectedRes = resState.some((res) => res.selected);

  const resource = (resourceState: ResState) => (
    <ListItem onClick={() => handleResourceClick(resourceState)} selected={resourceState.selected}>
      {resourceState.resource.name}
    </ListItem>
  );

  const resourcesList = <List style={{ border: "1px solid gray" }}>{resState.map((res) => resource(res))}</List>;
  const simResourcesButton = (
    <Button variant="contained" color="primary" disabled={!hasSelectedRes} onClick={handleAssignClick}>
      Assign Resource
    </Button>
  );

  const resourcesAssignation = (
    <div>
      <Typography variant="h6">Resources</Typography>
      {resourcesList}
      {simResourcesButton}
    </div>
  );

  return <>{resourcesAssignation}</>;
};
