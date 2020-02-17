import gql from "graphql-tag";

export const SOLD_RES_SUBSCRIPTION = gql`
  subscription SoldResource {
    soldResource {
      userId
      qty
      deliveryTime
    }
  }
`;

interface Resource {
  userId: number;
  qty: number;
  deliveryTime: number;
}

export interface SoldResource {
  soldResource: Resource[];
}

export const AVAILIBLE_RESOURCES_SUBSCRIPTION = gql`
  subscription onAvailibleResourceChange {
    availibleResourcesChanged {
      userId
      deliveryTime
      toBuy
      toSell
    }
  }
`;

export const USERS_CHANGED_SUBSCRIPTION = gql`
  subscription OnUsersChanged {
    usersChanged {
      id
      name
      taken
      ready
    }
  }
`;

export interface AvailibleResource {
  userId: number;
  deliveryTime: number;
  toBuy: number;
  toSell: number;
}
