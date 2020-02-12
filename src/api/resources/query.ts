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

export const USERS_QUERY = gql`
  query Users {
    users {
      name
      id
      taken
    }
  }
`;

export interface User {
  id: number;
  name: string;
  taken: boolean;
}

export interface Users {
  users: User[];
}
