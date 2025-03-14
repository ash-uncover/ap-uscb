import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

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

  return (
    <tr 
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <td className='ap-matchs-table-cell--date'>
        <Link to={`/matchs/${matchId}`}>{matchId}</Link>
      </td>
      <td style={{ textAlign: 'end' }}>
        {match.teamA} <span className='score'>{match.scoreA}</span>
      </td>
      <td>-</td>
      <td>
         <span className='score'>{match.scoreB}</span> {match.teamB}
      </td>
    </tr>
  )
  // #endregion
}
