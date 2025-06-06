import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkWithParams } from '../link/LinkWithParams'

export interface NavMenuItemProperties {
  className?: string
  link?: string
  icon?: IconProp
  selected?: boolean
}

export const NavMenuItem = ({
  className,
  link,
  selected,
  icon
}: NavMenuItemProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-navmenu-item']
  if (className) {
    classes.push(className)
  }
  if (selected) {
    classes.push('ap-navmenu-item--selected')
  }

  if (link) {
    return (
      <div className={classes.join(' ')}>
        <LinkWithParams className={'ap-navmenu-item-content'} to={link}>
          {icon ? <FontAwesomeIcon icon={icon} /> : null}
        </LinkWithParams>
      </div>
    )
  }
  return (
    <div className={classes.join(' ')}>
      <span className={'ap-navmenu-item-content'}>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
      </span>
    </div>
  )
  // #endregion
}
