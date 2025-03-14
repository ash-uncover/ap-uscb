import React from 'react'
import { BreadcrumbsItem, BreadcrumbsItemProperties } from './BreadcrumbsItem'

import './Breadcrumbs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface BreadcrumbsProperties {
  items: BreadcrumbsItemProperties[]
  separator?: string
}

export const Breadcrumbs = ({
  items,
  separator
}: BreadcrumbsProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-breadcrumbs']

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
