import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { TEAM } from '../../lib/model'
import { DataSelectors } from '../../store/data/data.selectors'

export const MatchTableRow = ({
  matchId
}) => {

  // #region Hooks
  const match = useSelector(DataSelectors.match(matchId))
  const navigate = useNavigate()
  // #endregion

  // #region Callbacks
  function handleClick() {
    navigate(`/matchs/${matchId}`)
  }
  // #endregion

  // #region Rendering
  const classes = ['ap-matchs-table-row']

  const teamL = match.home ? TEAM : match.opponent
  const scoreL = match.home ? match.score : match.scoreOpponent
  const teamV = match.home ? match.opponent : TEAM
  const scoreV = match.home ? match.scoreOpponent : match.score

  return (
    <tr
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <td className='ap-matchs-table-cell--date'>
        <Link to={`/matchs/${matchId}`}>{matchId}</Link>
      </td>
      <td style={{ textAlign: 'end' }}>
        <div>{teamL}</div>
        <div className='score'>{scoreL}</div>
      </td>
      <td style={{ textAlign: 'center' }}>-</td>
      <td>
        <div>{teamV}</div>
        <div className='score'>{scoreV}</div> 
      </td>
    </tr>
  )
  // #endregion
}
