import React from 'react'
import { useSelector } from 'react-redux'

import { TEAM } from '../../lib/model'
import { DataSelectors } from '../../store/data/data.selectors'
import { useNavigateWithParams } from '../../lib/useNavigateWithParams'
import { LinkWithParams } from '../common/link/LinkWithParams'

export const MatchTableRow = ({
  matchId
}) => {

  // #region > Hooks
  const match = useSelector(DataSelectors.match(matchId))
  const navigate = useNavigateWithParams()
  // #endregion

  // #region Callbacks
  function handleClick() {
    navigate(`/matchs/${matchId}`)
  }
  // #endregion

  // #region > Render
  const classes = ['ap-matchs-table-row']

  const teamL = match.home ? TEAM : match.opponent
  const scoreL = match.home ? match.score : match.scoreOpponent
  const teamV = match.home ? match.opponent : TEAM
  const scoreV = match.home ? match.scoreOpponent : match.score
  const winL = match.home ? (match.score > match.scoreOpponent) : (match.score < match.scoreOpponent)

  return (
    <tr
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <td className='ap-matchs-table-cell--date'>
        <LinkWithParams to={`/matchs/${matchId}`}>{matchId}</LinkWithParams>
      </td>
      <td style={{ textAlign: 'end', fontWeight: winL ? 'bold' : 'normal' }}>
        <div>{teamL}</div>
        <div className='score'>{scoreL}</div>
      </td>
      <td style={{ textAlign: 'center' }}>-</td>
      <td style={{ fontWeight: winL ? 'normal' : 'bold' }}>
        <div>{teamV}</div>
        <div className='score'>{scoreV}</div> 
      </td>
    </tr>
  )
  // #endregion
}
