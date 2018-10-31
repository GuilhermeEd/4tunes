import React from 'react'
import { Route } from 'react-router-dom'

export const pathsToRoutes = paths => paths.map(route => {
  const routeWithKey = { ...route, key: route.path }
  return <Route {...routeWithKey} />
})
