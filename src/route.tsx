import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from './components/loading'

export default routes.map((item, index) => {
    return (
        <Route
            key={index}
            exact
            path="/"
            component={Loadable({
                loader: () => import('./component/home'),
                loading: Loading
            })}
        />
    )
})
