import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import routes from "./route"
import store, { history } from './store'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);