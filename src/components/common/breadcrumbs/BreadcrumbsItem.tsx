import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LinkWithParams } from '../link/LinkWithParams'

export interface BreadcrumbsItemProperties {
  text: string
  link?: string
  icon?: IconProp
}

export const BreadcrumbsItem = ({
  text,
  link,
  icon
}: BreadcrumbsItemProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-breadcrumbs-item']
  if (link) {
    classes.push('ap-breadcrumbs-item--linked')
  }
  if (icon) {
    classes.push('ap-breadcrumbs-item--iconed')
  }

  if (link) {
    return (
      <LinkWithParams className={classes.join(' ')} to={link}>
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        {text}
      </LinkWithParams>
    )
  }
  return (
    <span className={classes.join(' ')}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {text}
    </span>
  )
  // #endregion
}
