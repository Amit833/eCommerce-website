import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes/Routes";
import { rootReducer } from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./App.css";

const store = createStore(rootReducer, composeWithDevTools()); // rootReducer is sum of all reducers

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
