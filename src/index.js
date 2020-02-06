import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";
import { rootStore } from "./stores";

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql"
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const GraphQLClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

// const defaultValues: RootStore = {
//   edua: {
//     sim: [],
//     simTime: 0
//   },
//   common: {
//     userId: 1
//   }
// };

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <ApolloProvider client={GraphQLClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StoreContext.Provider>,
  document.getElementById("root")
);

serviceWorker.register();
