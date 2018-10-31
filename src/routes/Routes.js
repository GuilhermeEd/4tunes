import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { pathsToRoutes } from '../helpers/routesHelper'
import NotFoundPage from '../pages/NotFoundPage'
import paths from './paths'

const Routes = () => (
  <Switch>
    {pathsToRoutes(paths)}
    <Route component={NotFoundPage} />
  </Switch>
)

export default withRouter(Routes)
