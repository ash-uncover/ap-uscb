import React from 'react'
import { useSelector } from 'react-redux'

import { DataSelectors } from '../../store/data/data.selectors'
import { Title } from '../common/title/Title'
import { TitleLevels } from '../common/title/TitleLevels'
import { Tile } from '../common/tile/Tile'

import { PlayersTable } from './PlayersTable'
import { PlayerTableRow } from './PlayersTableRow'


import './Players.css'

export const Players = () => {

  // #region > Hooks
  const general = useSelector(DataSelectors.general)
  const players = useSelector(DataSelectors.players)
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-players']

  return (
    <div className={classes.join(' ')}>
      <Title
        level={TitleLevels.H1}
        size={TitleLevels.H1}
      >
        Joueurs
      </Title>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Stats Globales
      </Title>

      <div className='ap-players-tiles ap-tiles'>
        <Tile
          text={`${Object.keys(players).length}`}
          desc='Joueurs'
          icon={['fas', 'users']}
        />
        <Tile
          text={`${general.playersPerMatch.toFixed(1)}`}
          desc='Joueurs par match'
          icon={['fas', 'basketball']}
        />
      </div>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Liste joueurs
      </Title>

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
