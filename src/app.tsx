import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { HashRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import store, { history } from './store'
import { Loading } from '@component'

const loadableOptions = { fallback: <Loading /> }

const Home = loadable(
    () => import(/* webpackChunkName: "home" */ './page/Home'),
    loadableOptions
)

const Login = loadable(
    () => import(/* webpackChunkName: "login" */ './page/Login'),
    loadableOptions
)

const NotFound = loadable(
    () => import(/* webpackChunkName: "notFound" */ './page/NotFound'),
    loadableOptions
)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
