import gql from "graphql-tag";

export const AVAILIBLE_RES_QUERY = gql`
  query Resources {
    resources {
      toSell
      toBuy
      userId
      deliveryTime
    }
  }
`;

interface Resource {
  userId: number;
  qty: number;
  deliveryTime: number;
}

export interface Resources {
  resources: Resource[];
}
