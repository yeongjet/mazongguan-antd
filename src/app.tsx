import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import routes from './route'
import store, { history } from './store'
import { HashRouter, Switch } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <Switch>{routes}</Switch>
            </HashRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
