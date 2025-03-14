import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { DataSelectors } from '../../store/data/data.selectors'

export const PlayerTableRow = ({
  playerId
}) => {

  // #region Hooks
  const player = useSelector(DataSelectors.player(playerId))
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-player-table-row']

  return (
    <tr className={classes.join(' ')}>
      <td>
        <Link to={`/players/${playerId}`}>{playerId}</Link>
      </td>
      <td>
        {player.matchs}
      </td>
      <td>
        {player.points}
      </td>
    </tr>
  )
  // #endregion
}
