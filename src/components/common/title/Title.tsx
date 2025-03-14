import React, { ReactNode } from 'react'
import { TitleLevel, TitleLevels } from './TitleLevels'

import './Title.css'

export interface TitleProperties {
  children?: ReactNode
  size?: TitleLevel
  level?: TitleLevel
}

export const Title = ({
  children,
  level,
  size
}: TitleProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-title']
  switch (size) {
    case TitleLevels.H2: 
    case TitleLevels.H3: 
    case TitleLevels.H4: 
    case TitleLevels.H5: 
    case TitleLevels.H6: 
    case TitleLevels.H1: {
      classes.push(`ap-title--${size}`)
      break
    }
    default: {
      classes.push('ap-title--h1')
      break
    }
  }

  switch (level) {
    case TitleLevels.H2: {
      return (
        <h2 className={classes.join(' ')}>{children}</h2>
      )
    }
    case TitleLevels.H3: {
      return (
        <h3 className={classes.join(' ')}>{children}</h3>
      )
    }
    case TitleLevels.H4: {
      return (
        <h4 className={classes.join(' ')}>{children}</h4>
      )
    }
    case TitleLevels.H5: {
      return (
        <h5 className={classes.join(' ')}>{children}</h5>
      )
    }
    case TitleLevels.H6: {
      return (
        <h6 className={classes.join(' ')}>{children}</h6>
      )
    }
    case TitleLevels.H1: 
    default: {
      return (
        <h1 className={classes.join(' ')}>{children}</h1>
      )
    }
  }
  // #endregion
}
