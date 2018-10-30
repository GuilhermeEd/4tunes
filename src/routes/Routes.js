import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import paths from './paths'

const routes = paths.map(route => <Route {...route} />)

const Routes = () => (
  <Switch>
    {routes}
    <Route component={NotFoundPage} />
  </Switch>
)

export default withRouter(Routes)
