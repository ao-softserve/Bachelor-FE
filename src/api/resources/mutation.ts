import gql from "graphql-tag";

export const SELL_RES = gql`
  mutation SellResource($userId: Int!, $qty: Int!) {
    sellResources(userId: $userId, qty: $qty) {
      userId
      toSell
      toBuy
      deliveryTime
    }
  }
`;

interface Resource {
  userId: number;
  toSell: number;
  toBuy: number;
  deliveryTime: number;
}

export interface SellResourcesResponse {
  sellResources: Resource[];
}
export interface SellResources {
  sellResources: (userId: number, qty: number) => void;
}

export const SET_USER_TAKEN = gql`
  mutation SetUserTaken($userId: Int!) {
    setUserTaken(userId: $userId)
  }
`;

export interface SetUserTaken {
  setUserTaken: (variables: any) => void;
}

export const SET_USER_READY = gql`
  mutation SetUserReady($userId: Int!) {
    setUserReady(userId: $userId)
  }
`;

export interface SetUserReady {
  setUserReady: (variables: any) => void;
}
