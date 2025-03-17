import React, { ReactNode, useEffect, useState } from 'react'

import './ProgressBar.css'

export interface ProgressBarProperties {
  className?: string
}

export const ProgressBar = ({
  className
}: ProgressBarProperties) => {

  // #region Hooks
  const [width, setWidth] = useState<string>('0')
  useEffect(() => {
    setWidth('100%')
  }, [])
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-progressbar']
  if (className) {
    classes.push(className)
  }
  return (
    <div className={classes.join(' ')}>
      <div
        style={{ width }}
        className='ap-progressbar-container'
      />
      <div className='ap-progressbar-value' />
    </div>
  )
  // #endregion
}
