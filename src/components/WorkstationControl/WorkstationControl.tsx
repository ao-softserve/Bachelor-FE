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
import connections from "../../simulationsData/producer/connections";
import CONNECTIONS_CONSTRAINS, { ConnectionConstrain } from "../../simulationsData/producer/connectionConstrains";

export const WorkstationControl: React.FC = observer(() => {
  const { common, edua } = React.useContext<RootStore>(StoreContext);

  const currentWorkstation = edua.workstations.find((wst) => wst.id === common.workstationControled);
  //eslint-disable-next-line
  const workstationStatus = currentWorkstation!.status
  const getConstrainProd = (connId: number) =>
    CONNECTIONS_CONSTRAINS.find((conn: ConnectionConstrain) => conn.connectionId === connId)!.productId;

  const connectionsWithProds = connections.map((conn) => ({ ...conn, productId: getConstrainProd(conn.id) }));

  const currentWstBuffor = edua.buffers.find((buf) => buf.id === currentWorkstation!.buffer_id);

  const canDisplayTransfer = workstationStatus !== "not ready";

  const rawProdId = connectionsWithProds.find((conn) => conn.to === currentWorkstation!.buffer_id)!.productId;

  const readyProdId = connectionsWithProds.find((conn) => conn.from === currentWorkstation!.buffer_id)!.productId;

  const products = currentWstBuffor!.products.length ? currentWstBuffor!.products : [];

  const getProduct = (id: number) => (products.length ? products.find((prod) => prod.product_id === id) : { qty: 0 });

  const rawProducts = getProduct(rawProdId) ? getProduct(rawProdId)!.qty : 0;

  const readyProducts = getProduct(readyProdId) ? getProduct(readyProdId)!.qty : 0;

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
