import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { ROUTE_ITEMS } from '../lib/routes'
import { Breadcrumbs } from './common/breadcrumbs/Breadcrumbs'
import { BreadcrumbsItemProperties } from './common/breadcrumbs/BreadcrumbsItem'

interface RouteInfo {
  route: string
  param?: string
}
function resolveRoute(path: string, params: any): RouteInfo {
  if (params.playerId) {
    return {
      route: 'PLAYER',
      param: params.playerId
    }
  }
  if (params.matchId) {
    return {
      route: 'MATCH',
      param: params.matchId
    }
  }
  if (path.startsWith('/players')) {
    return {
      route: 'PLAYERS'
    }
  }
  if (path.startsWith('/matchs')) {
    return {
      route: 'MATCHS'
    }
  }
  return {
    route: 'OVERVIEW'
  }
}
function buildBreadcrumbsItems(route: RouteInfo) {
  switch(route.route) {
    case 'OVERVIEW': {
      return [
        ROUTE_ITEMS.OVERVIEW
      ]
    }
    case 'PLAYERS': {
      return [
        ROUTE_ITEMS.OVERVIEW,
        ROUTE_ITEMS.PLAYERS
      ]
    }
    case 'PLAYER': {
      return [
        ROUTE_ITEMS.OVERVIEW,
        ROUTE_ITEMS.PLAYERS,
        { ...ROUTE_ITEMS.PLAYERS, text: route.param },
      ]
    }
    case 'MATCHS': {
      return [
        ROUTE_ITEMS.OVERVIEW,
        ROUTE_ITEMS.MATCHS
      ]
    }
    case 'MATCH': {
      return [
        ROUTE_ITEMS.OVERVIEW,
        ROUTE_ITEMS.MATCHS,
        { ...ROUTE_ITEMS.MATCHS, text: route.param },
      ]
    }
  }
}

export const AppBreadcrumbs = () => {

  // #region Hooks
  const [route, setRoute] = useState<RouteInfo>({ route: 'OVERVIEW' })
  const [breadcrumbsItems, setBreadcrumbsItems] = useState<BreadcrumbsItemProperties[]>([])
  const location = useLocation()
  const params = useParams()
  useEffect(() => {
    const newRoute = resolveRoute(location.pathname, params)
    setRoute(newRoute)
  }, [location, params])
  useEffect(() => {
    setBreadcrumbsItems(buildBreadcrumbsItems(route))
  }, [route])
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-app-breadcrumbs']

  return (
    <Breadcrumbs 
      className={classes.join(' ')}
      items={breadcrumbsItems} 
    />
  )
  // #endregion
}
