import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { DataSelectors } from '../../../store/data/data.selectors'
import { PlayerMatchModel } from '../../../lib/model'
import { timeToString } from '../../../lib/time'
import { useNavigateWithParams } from '../../../lib/useNavigateWithParams'
import { LinkWithParams } from '../../common/link/LinkWithParams'

export const MatchTablePlayerRow = ({
  matchId,
  playerId
}) => {

  // #region > Hooks
  const [player, setPlayer] = useState<PlayerMatchModel>()
  const match = useSelector(DataSelectors.match(matchId))
  const navigate = useNavigateWithParams()
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

  // #region > Render
  const classes = ['ap-match-player-table-row']

  if (player) {
    return (
      <tr 
        className={classes.join(' ')}
        onClick={handleClick}
      >
        <td>
          <LinkWithParams to={`/players/${player.player}`}>{player.player}</LinkWithParams>
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
