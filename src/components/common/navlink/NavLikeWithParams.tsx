import React, { ReactNode } from 'react'
import { createSearchParams, NavLink, useSearchParams } from 'react-router-dom'

export interface NavLinkWithParamsProperties {
  className?: string
  to: string
  children?: ReactNode
}

export const NavLinkWithParams = ({
  className,
  to,
  children
}: NavLinkWithParamsProperties) => {

  // #region > Hooks
  const [params] = useSearchParams()
  // #endregion

  // #region > Render
  const classes = ['nav-link-with-params']
  if (className) {
    classes.push(className)
  }
  const search = `?${createSearchParams(params).toString()}`
  return (
    <NavLink
      className={classes.join(' ')}
      to={{
        pathname: to,
        search,
      }}>
      {children}
    </NavLink>
  )
  // #endregion
}
