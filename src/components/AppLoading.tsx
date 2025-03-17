import React from 'react'
import { CONFIG } from '../config'
import { ProgressBar } from './common/progressbar/ProgressBar'

export const AppLoading = () => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-app-loading']

  return (
    <div className={classes.join(' ')}>
      <img
        width='50%'
        src={`${CONFIG.AP_USCB_PUBLIC}/imagelogo.jpg`}
      />
      <div>Chargement</div>
      <ProgressBar />
    </div>
  )
  // #endregion
}
