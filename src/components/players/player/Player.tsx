import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Title } from '../../common/title/Title'
import { TitleLevels } from '../../common/title/TitleLevels'
import { Tile } from '../../common/tile/Tile'
import { TileSizes } from '../../common/tile/TileSize'
import { timeToString } from '../../../lib/time'
import { DataSelectors } from '../../../store/data/data.selectors'

import './Player.css'

export const Player = () => {

  // #region Hooks
  const playerId = useParams().playerId
  const player = useSelector(DataSelectors.player(playerId))
  const matchs = useSelector(DataSelectors.matchs)
  const [playerMatchs, setPlayerMatchs] = useState([])
  useEffect(() => {
    setPlayerMatchs(Object.values(matchs).filter(
      match => match.players.some(p => p.player === playerId)
    ))
  }, [playerId, matchs])
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-player']
  return (
    <div className={classes.join(' ')}>
      <Title
        level={TitleLevels.H1}
        size={TitleLevels.H1}
      >
        {playerId}
      </Title>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Stats Joueur
      </Title>
      <div className='ap-player-tiles ap-tiles'>
        <Tile
          text={`${player.matchs}`}
          desc='Matchs Joués'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${player.time[0]}`}
          desc='Minutes de jeu'
          icon={['fas', 'clock']}
        />
        <Tile
          text={`${player.points}`}
          desc='Points'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${timeToString(player.timePerMatch)}`}
          desc='Temps moyen'
          size={TileSizes.M}
          icon={['fas', 'clock']}
        />
        <Tile
          text={`${player.points3}`}
          desc='3 Points'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${player.points2e + player.points2i}`}
          desc='2 Points'
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${player.pointsPerMatch.toFixed(2)}`}
          desc='Points par match'
          size={TileSizes.M}
          icon={['fas', 'basketball']}
        />
        <Tile
          text={`${player.pointsPerMin.toFixed(2)}`}
          desc='Points par minute'
          size={TileSizes.M}
          icon={['fas', 'clock']}
        />
      </div>

      <Title
        level={TitleLevels.H2}
        size={TitleLevels.H2}
      >
        Matchs Joués
      </Title>
      <table className={'ap-table'}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temps de jeu</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {playerMatchs.map((match) => {
            const playerMatchData = match.players.find(p => p.player === playerId)!
            return (
              <tr key={match.date}>
                <td>{match.date}</td>
                <td>{timeToString(playerMatchData.time)}</td>
                <td>{playerMatchData.points}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
  // #endregion
}
