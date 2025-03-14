import React from 'react'
import { useParams } from 'react-router-dom'

import './Match.css'

export const Match = () => {

  // #region Hooks
  const matchId = useParams().matchId
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-match']

  return (
    <div className={classes.join(' ')}>
      MATCH {matchId}
    </div>
  )
  // #endregion
}
