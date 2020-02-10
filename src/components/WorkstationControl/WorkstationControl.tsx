/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import Typography from "@material-ui/core/Typography";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { observer } from "mobx-react";
import { SimResources } from "../SimResources/SimResources";
import { SetupButton } from "../SetupButton/SetupButton";
import { TransferProducts } from "../TransferProducts/TransferProducts";
import { StartOperation } from "../StartOperation/StartOperation";

export const WorkstationControl: React.FC = observer(() => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);

  const currentWorkstation = edua.workstations.find((wst) => wst.id === common.workstationControled);
  //eslint-disable-next-line
  const workstationStatus = currentWorkstation!.status

  const currentWstBuffor = edua.buffers.find((buf) => buf.id === currentWorkstation!.buffer_id);

  const canDisplayTransfer = workstationStatus !== "not ready";

  const products = currentWstBuffor!.products.length
    ? currentWstBuffor!.products.sort((prodA, prodB) => prodA.product_id - prodB.product_id)
    : [];

  const rawProducts = products.length > 0 ? products[0].qty : 0;

  const readyProducts = products.length > 1 ? products[1].qty : 0;

  const title = <Typography variant="h5">{`Workstation ${common.workstationControled} Control`}</Typography>;

  const workstationStatusInfo = <Typography variant="body2">{`Status: ${workstationStatus}`}</Typography>;

  const rawProductsInfo = <Typography variant="body2">{`Raw products: ${rawProducts}`}</Typography>;

  const productsReadyInfo = <Typography variant="body2">{`Ready products: ${readyProducts}`}</Typography>;

  return (
    <>
      {title}
      {workstationStatusInfo}
      {rawProductsInfo}
      {productsReadyInfo}
      {!canDisplayTransfer ? (
        <>
          <SimResources />
          <SetupButton />
        </>
      ) : (
          <>
            <StartOperation />
            <TransferProducts />
          </>
        )}
    </>
  );
});
