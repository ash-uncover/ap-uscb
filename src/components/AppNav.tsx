import React, { useEffect, useState } from 'react'

import { NavMenu } from './common/navmenu/NavMenu'
import { ROUTE_ITEMS } from '../lib/routes'
import { NavMenuItemProperties } from './common/navmenu/NavMenuItem'
import { useLocation } from 'react-router-dom'

function resolveRoute(path: string): string {
  if (path.startsWith('/players')) {
    return 'PLAYERS'
  }
  if (path.startsWith('/matchs')) {
    return 'MATCHS'
  }
  return 'OVERVIEW'
}

function buildNavMenuItems(route: string) {
  switch (route) {
    case 'OVERVIEW': {
      return [
        { ...ROUTE_ITEMS.OVERVIEW, selected: true },
        { ...ROUTE_ITEMS.MATCHS },
        { ...ROUTE_ITEMS.PLAYERS }
      ]
    }
    case 'PLAYERS': {
      return [
        { ...ROUTE_ITEMS.OVERVIEW },
        { ...ROUTE_ITEMS.MATCHS },
        { ...ROUTE_ITEMS.PLAYERS, selected: true }
      ]
    }
    case 'MATCHS': {
      return [
        { ...ROUTE_ITEMS.OVERVIEW },
        { ...ROUTE_ITEMS.MATCHS, selected: true },
        { ...ROUTE_ITEMS.PLAYERS }
      ]
    }
  }
}

export const AppNav = () => {

  // #region > Hooks
  const [route, setRoute] = useState<string>('OVERVIEW')
  const [navmenuItems, setNavmenuItems] = useState<NavMenuItemProperties[]>([])
  const location = useLocation()
  useEffect(() => {
      const newRoute = resolveRoute(location.pathname)
      setRoute(newRoute)
    }, [location])
    useEffect(() => {
      setNavmenuItems(buildNavMenuItems(route))
    }, [route])
    // #endregion
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-app-nav']

  return (
    <footer className={classes.join(' ')}>
      <NavMenu
        items={navmenuItems}
      />
    </footer>
  )
  // #endregion
}
