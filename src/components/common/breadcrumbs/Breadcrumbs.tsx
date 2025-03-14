import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BreadcrumbsItem, BreadcrumbsItemProperties } from './BreadcrumbsItem'

import './Breadcrumbs.css'

export interface BreadcrumbsProperties {
  className?: string
  items: BreadcrumbsItemProperties[]
}

export const Breadcrumbs = ({
  className,
  items
}: BreadcrumbsProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-breadcrumbs']
  if (className) {
    classes.push(className)
  }
  return (
    <nav className={classes.join(' ')}>
      {items.map(
        (item, index) => {
          const result = []
          if (index) {
            result.push(
              <span
                key={`breadcrumb-item-separator-${index}`}
                className='ap-breadcrumbs-separator'
              >
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
              </span>
            )
          }
          result.push(
            <BreadcrumbsItem
              key={`breadcrumb-item-${index}`}
              {...item}
            />
          )
          return result
        }
      ).flat()}
    </nav>
  )
  // #endregion
}
