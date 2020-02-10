export interface ConnectionConstrain {
  connectionId: number;
  productId: number;
}

const CONNECTIONS_CONSTRAINS: ConnectionConstrain[] = [
  { connectionId: 1, productId: 1 },
  { connectionId: 2, productId: 2 },
  { connectionId: 3, productId: 1 },
  { connectionId: 4, productId: 4 },
  { connectionId: 5, productId: 2 }
];

export default CONNECTIONS_CONSTRAINS;

// -- ConnectionConstraints        connection_id, product_id
// 1,      1
// 2,      2
// 3,      1
// 4,      4
// 5,      2
