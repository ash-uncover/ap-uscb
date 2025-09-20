import React from 'react'
import { useSelector } from 'react-redux'

import { DataSelectors } from '../../store/data/data.selectors'
import { LinkWithParams } from '../common/link/LinkWithParams'

export const PlayerTableRow = ({
  playerId
}) => {

  // #region > Hooks
  const player = useSelector(DataSelectors.player(playerId))
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-player-table-row']

  return (
    <tr className={classes.join(' ')}>
      <td>
        <LinkWithParams to={`/players/${playerId}`}>{playerId}</LinkWithParams>
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
