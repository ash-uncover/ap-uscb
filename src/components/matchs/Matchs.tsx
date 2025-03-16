import React from 'react'
import { useSelector } from 'react-redux'

import { DataSelectors } from '../../store/data/data.selectors'
import { Tile } from '../common/tile/Tile'

import { MatchsTable } from './MatchsTable'
import { MatchTableRow } from './MatchsTableRow'

import './Matchs.css'
import { Title } from '../common/title/Title'
import { TitleLevels } from '../common/title/TitleLevels'

export const Matchs = () => {

  // #region Hooks
  const general = useSelector(DataSelectors.general)
  const matchs = useSelector(DataSelectors.matchs)
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-matchs']

  return (
    <div className={classes.join(' ')}>
      <Title
        level={TitleLevels.H1}
        size={TitleLevels.H1}
      >
        Matchs
      </Title>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Statistiques
      </Title>
      <div className='ap-matchs-tiles ap-tiles'>
        <Tile
          text={`${Object.values(matchs).length}`}
          desc='Matchs joués'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${general.victories}`}
          desc='Victoires'
          icon={['fas', 'trophy']}
        />
      </div>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Tous les Matchs
      </Title>
      <div className='ap-matchs-description'>
        Sélectionner un match pour accéder à la feuille de match
      </div>
      <MatchsTable>
        {Object.keys(matchs).sort((m1, m2) => m1.localeCompare(m2)).map(match => {
          return (
            <MatchTableRow
              key={match}
              matchId={match}
            />
          )
        })}
      </MatchsTable>
    </div>
  )
  // #endregion
}
