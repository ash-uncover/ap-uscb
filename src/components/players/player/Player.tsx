import React from 'react'
import { useParams } from 'react-router-dom'

import './Player.css'

export const Player = () => {

  // #region Hooks
  const playerId = useParams().playerId
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-player']

  return (
    <div className={classes.join(' ')}>
      Joueur {playerId}
    </div>
  )
  // #endregion
}
