import { RootState } from "../reducers";
import { eduAModuleName } from "../reducers/eduA";
import { edua } from "../eduA/EduA";

export const eduASelector = (state: RootState) => state[eduAModuleName];

export const timeSelector = (state: RootState) => eduASelector(state).time;

export const simRunningSelector = (state: RootState) => eduASelector(state).simRunning;
export const simSelector = (state: RootState) => eduASelector(state).sim;

export const simVisInfoSelector = (state: RootState) => (simSelector(state).length ? edua.visInfo(simSelector(state)) : []);
export const simInfoSelector = (state: RootState) => (simSelector(state).length ? edua.info(simSelector(state)) : []);
export const moneySelector = (state: RootState) =>
  simSelector(state).length
    ? simInfoSelector(state).assets.find((info: { name: string; value: string }) => info.name === "money").value
    : "";

export const userIdSelector = (state: RootState) => eduASelector(state).userId;
export const rawProductsSelector = (state: RootState) => {
  const simInfo = simInfoSelector(state);
  const products = simInfo.buffers && simInfo.buffers.find((buff: any) => buff.id === 1).products;
  return products && products.length && products.find((prod: any) => prod.product_id === 1).qty;
};
