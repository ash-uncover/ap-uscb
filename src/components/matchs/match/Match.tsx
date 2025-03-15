import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Title } from '../../common/title/Title'
import { TitleLevels } from '../../common/title/TitleLevels'
import { DataSelectors } from '../../../store/data/data.selectors'

import { MatchTable } from './MatchTable'
import { MatchTablePlayerRow } from './MatchTablePlayerRow'

import './Match.css'

export const Match = () => {

  // #region Hooks
  const matchId = useParams().matchId
  const match = useSelector(DataSelectors.match(matchId))
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-match']

  console.log('in match', match.players.slice())

  return (
    <div className={classes.join(' ')}>
      <Title
        level={TitleLevels.H1}
        size={TitleLevels.H1}
      >
        Match du {matchId}
      </Title>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Résultat
      </Title>

      <div></div>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Feuille de Match
      </Title>

      <MatchTable>
        {match.players.slice().sort((p1, p2) => p1.player.localeCompare(p2.player)).map(player => {
          return (
            <MatchTablePlayerRow
              key={`${matchId}-${player.player}`}
              matchId={matchId}
              playerId={player.player}
            />
          )
        })}
      </MatchTable>


    </div>
  )
  // #endregion
}
