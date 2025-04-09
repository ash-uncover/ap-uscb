import React, { ReactNode } from 'react'
import { createSearchParams, Link, useSearchParams } from 'react-router-dom'

export interface LinkWithParamsProperties {
  className?: string
  to: string
  children?: ReactNode
}

export const LinkWithParams = ({
  className,
  to,
  children
}: LinkWithParamsProperties) => {

  // #region Hooks
  const [params] = useSearchParams()
  // #endregion

  // #region Rendering
  const classes = ['link-with-params']
  if (className) {
    classes.push(className)
  }
  const search = `?${createSearchParams(params).toString()}`
  return (
    <Link
      className={classes.join(' ')}
      to={{
        pathname: to,
        search,
      }}>
      {children}
    </Link>
  )
  // #endregion
}
