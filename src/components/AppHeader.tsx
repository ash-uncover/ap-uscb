import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
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
  if (path.startsWith('/matches')) {
    return {
      route: 'MATCHES'
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
        { text: 'Acceuil' }
      ]
    }
    case 'PLAYERS': {
      return [
        { text: 'Acceuil', link: '/' },
        { text: 'Players' }
      ]
    }
    case 'PLAYER': {
      return [
        { text: 'Acceuil', link: '/' },
        { text: 'Players', link: '/players' },
        { text: route.param },
      ]
    }
    case 'MATCHES': {
      return [
        { text: 'Acceuil', link: '/' },
        { text: 'Matches' }
      ]
    }
    case 'MATCH': {
      return [
        { text: 'Acceuil', link: '/' },
        { text: 'Matches', link: '/matches' },
        { text: route.param },
      ]
    }
  }
}

export const AppHeader = () => {

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
  const classes = ['ap-app-header']

  return (
    <header className={classes.join(' ')}>
      <Breadcrumbs items={breadcrumbsItems} />
    </header>
  )
  // #endregion
}
