import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { rootStore } from "./stores";

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={rootStore}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);

serviceWorker.register();
