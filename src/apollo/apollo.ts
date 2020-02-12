import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";

const httpLink = (ip: string, port: string) => {
  return new HttpLink({
    uri: `http://${ip}:${port}/graphql`
  });
};

const wsLink = (ip: string, port: string) => {
  return new WebSocketLink({
    uri: `ws://${ip}:${port}/graphql`,
    options: {
      reconnect: true
    }
  });
};

const link = (ip: string, port: string) =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    wsLink(ip, port),
    httpLink(ip, port)
  );

export const GraphQLClient = (ip: string, port: string) => {
  return new ApolloClient({
    link: link(ip, port),
    cache: new InMemoryCache()
  });
};
