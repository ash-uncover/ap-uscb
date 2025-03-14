import React from 'react'
import { useSelector } from 'react-redux'

import { DataSelectors } from '../../store/data/data.selectors'

import { PlayersTable } from './PlayersTable'
import { PlayerTableRow } from './PlayersTableRow'

import './Players.css'

export const Players = () => {

  // #region Hooks
  const players = useSelector(DataSelectors.players)
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-players']

  return (
    <div className={classes.join(' ')}>
      <PlayersTable>
        {Object.keys(players).sort((p1, p2) => p1.localeCompare(p2)).map(player => {
          return (
            <PlayerTableRow
              key={player}
              playerId={player}
            />
          )
        })}
      </PlayersTable>
    </div>
  )
  // #endregion
}
