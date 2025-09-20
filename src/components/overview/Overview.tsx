import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { PlayerModel } from '../../lib/model'
import { compareTimes, timeToString } from '../../lib/time'
import { DataSelectors } from '../../store/data/data.selectors'
import { Tile } from '../common/tile/Tile'
import { Title } from '../common/title/Title'
import { TitleLevels } from '../common/title/TitleLevels'
import { OverviewTable } from './OverviewTable'

import './Overview.css'
import { NavLinkWithParams } from '../common/navlink/NavLikeWithParams'

export const Overview = () => {

  // #region > Hooks
  const general = useSelector(DataSelectors.general)
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-overview']

  return (
    <div className={classes.join(' ')}>

      <Title
        level={TitleLevels.H1}
        size={TitleLevels.H1}
      >
        Accueil
      </Title>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Stats équipe
      </Title>
      <div className='ap-overview-tiles ap-tiles'>
        <NavLinkWithParams to='/matchs'>
          <Tile
            text={`${general.matchs}`}
            desc='Matchs joués'
            icon={['fas', 'basketball']}
          />
        </NavLinkWithParams>
        <NavLinkWithParams to='/players'>
          <Tile
            text={`${general.players}`}
            desc='Joueurs'
            icon={['fas', 'users']}
          />
        </NavLinkWithParams>
        <Tile
          text={`${general.points}`}
          desc='Points marqués'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${(general.points / general.matchs).toFixed(1)}`}
          desc='Points par match'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${general.fouls}`}
          desc='Fautes Commises'
          icon={['fas', 'circle-exclamation']}
        />
        <Tile
          text={`${general.foulsOpponent}`}
          desc='Fautes Provoquées'
          icon={['fas', 'circle-exclamation']}
        />
        <Tile
          text={`${general.points3}`}
          desc='3 Points'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${general.points1}`}
          desc='Lancers Francs'
          icon={['fas', 'basketball']}
        />
      </div>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Stats joueurs
      </Title>

      <OverviewTable
        title='Matchs Joués'
        stat='Matchs'
        compare={(p1: PlayerModel, p2: PlayerModel) => p2.matchs - p1.matchs}
        formatter={(p: PlayerModel) => p.matchs}
      />
      <OverviewTable
        title='Temps de jeu'
        stat='Temps'
        compare={(p1: PlayerModel, p2: PlayerModel) => compareTimes(p2.time, p1.time)}
        formatter={(p: PlayerModel) => timeToString(p.time)}
        />
      <OverviewTable
        title='Temps de jeu / match'
        stat='Temps'
        compare={(p1: PlayerModel, p2: PlayerModel) => compareTimes(p2.timePerMatch, p1.timePerMatch)}
        formatter={(p: PlayerModel) => timeToString(p.timePerMatch)}
      />
      <OverviewTable
        title='Top Scoreurs'
        stat='Points'
        compare={(p1: PlayerModel, p2: PlayerModel) => p2.points - p1.points}
        formatter={(p: PlayerModel) => p.points}
      />
      <OverviewTable
        title='Points Par Match'
        stat='Points / match'
        compare={(p1: PlayerModel, p2: PlayerModel) => p2.pointsPerMatch - p1.pointsPerMatch}
        formatter={(p: PlayerModel) => p.pointsPerMatch.toFixed(2)}
      />
      <OverviewTable
        title='Points Par Minute'
        stat='Points / minute'
        compare={(p1: PlayerModel, p2: PlayerModel) => p2.pointsPerMin - p1.pointsPerMin}
        formatter={(p: PlayerModel) => p.pointsPerMin.toFixed(2)}
      />
      <OverviewTable
        title='Shooteurs'
        stat='3 points'
        compare={(p1: PlayerModel, p2: PlayerModel) => p2.points3 - p1.points3}
        formatter={(p: PlayerModel) => p.points3}
      />
    </div>
  )
  // #endregion
}
