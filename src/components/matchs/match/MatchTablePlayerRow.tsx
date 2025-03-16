import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { DataSelectors } from '../../../store/data/data.selectors'
import { PlayerMatchModel } from '../../../lib/model'
import { timeToString } from '../../../lib/time'

export const MatchTablePlayerRow = ({
  matchId,
  playerId
}) => {

  // #region Hooks
  const [player, setPlayer] = useState<PlayerMatchModel>()
  const match = useSelector(DataSelectors.match(matchId))
  const navigate = useNavigate()
  useEffect(() => {
    const newPlayer = match.players.find(p => p.player === playerId)
    setPlayer(newPlayer)
  }, [match])
  // #endregion

  // #region Callbacks
  function handleClick() {
    if (player) {
      navigate(`/players/${player.player}`)
    }
  }
  // #endregion

  // #region Rendering
  const classes = ['ap-match-player-table-row']

  if (player) {
    return (
      <tr 
        className={classes.join(' ')}
        onClick={handleClick}
      >
        <td>
          <Link to={`/players/${player.player}`}>{player.player}</Link>
        </td>
        <td>
          {timeToString(player.time)}
        </td>
        <td>
          {player.points}
        </td>
      </tr>
    )
  }
  return null
  // #endregion
}
