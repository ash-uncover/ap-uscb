import React, { useEffect, useState } from 'react'

import { NavMenuItem, NavMenuItemProperties } from './NavMenuItem'

import './NavMenu.css'

export interface NavMenuProperties {
  className?: string
  items: NavMenuItemProperties[]
}

export const NavMenu = ({
  className,
  items
}: NavMenuProperties) => {

  // #region > Hooks
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  useEffect(() => {
    const index = items.findIndex(i => i.selected)
    if (index === -1) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(index)
    }
  }, [items])
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-navmenu']
  if (className) {
    classes.push(className)
  }
  const classesFillerBefore = ['ap-navmenu-item--filler']
  if (selectedIndex === 0) {
    classesFillerBefore.push('ap-navmenu-item--before')
  }
  const classesFillerAfter = ['ap-navmenu-item--filler']
  if (selectedIndex === items.length - 1) {
    classesFillerAfter.push('ap-navmenu-item--after')
  }
  return (
    <nav className={classes.join(' ')}>
      <NavMenuItem
        className={classesFillerBefore.join(' ')}
      />
      {items.map(
        (item, index) => {
          const result = []
          const classesItem = []
          if (index === selectedIndex - 1) {
            classesItem.push('ap-navmenu-item--before')
          }
          if (index === selectedIndex + 1) {
            classesItem.push('ap-navmenu-item--after')
          }
          result.push(
            <NavMenuItem
              key={`breadcrumb-item-${index}`}
              className={classesItem.join(' ')}
              {...item}
            />
          )
          return result
        }
      ).flat()}
      <NavMenuItem
        className={classesFillerAfter.join(' ')}
      />
    </nav>
  )
  // #endregion
}
