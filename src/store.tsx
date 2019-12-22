import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducer from './reducer'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createEpicMiddleware } from 'redux-observable'
import { epic } from './epic'

export const history = createBrowserHistory()

const epicMiddleware = createEpicMiddleware()

export default createStore(
    combineReducers({
        router: connectRouter(history),
        ...reducer
    }),
    applyMiddleware(epicMiddleware, routerMiddleware(history))
)

epicMiddleware.run(epic)
