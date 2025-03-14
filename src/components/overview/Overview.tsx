import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DataSelectors } from '../../store/data/data.selectors'
import { PlayerOverviewModel, PlayerStat, PlayerStatTime } from '../../lib/model'
import { addTimes, compareTimes, timeToString } from '../../lib/time'

export const Overview = () => {

  // #region Hooks
  const [overview, setOverview] = useState<PlayerOverviewModel[]>([])
  const [playerStatMatch, setPlayerStatMatch] = useState<PlayerStat[]>([])
  const [playerStatTime, setPlayerStatTime] = useState<PlayerStatTime[]>([])
  const [playerStatPoints, setPlayerStatPoints] = useState<PlayerStat[]>([])
  const [playerStatPoints3, setPlayerStatPoints3] = useState<PlayerStat[]>([])
  const [playerStatPointsPerMatch, setPlayerStatPointsPerMatch] = useState<PlayerStat[]>([])
  const [playerStatPointsPerMin, setPlayerStatPointsPerMin] = useState<PlayerStat[]>([])
  const data = useSelector(DataSelectors.data)
  useEffect(() => {
    const allPlayersInfo = data.map(d => d.playersA).flat()
    setOverview(
      allPlayersInfo
        .reduce((acc, playerInfo) => {
          let player: PlayerOverviewModel = acc.find(p => p.player === playerInfo.player)
          if (!player) {
            player = {
              matches: 0,
              player: playerInfo.player,
              time: [0, 0],
              points3: 0,
              points2i: 0,
              points2e: 0,
              points1: 0,
              fouls: 0
            }
            acc.push(player)
          }
          player.matches++
          player.time = addTimes([player.time, playerInfo.time])
          player.points3 += playerInfo.points3
          player.points2e += playerInfo.points2e
          player.points2i += playerInfo.points2i
          player.points1 += playerInfo.points1
          player.fouls += playerInfo.fouls
          return acc
        }, [])
        .sort(
          (p1, p2) => p1.player.localeCompare(p2.player)
        )
    )
  }, [data])
  useEffect(() => {
    setPlayerStatMatch(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          return {
            player: playerOverview.player,
            value: playerOverview.matches
          }
        })
        .sort((s1, s2) => {
          return s2.value - s1.value
        })
    )
    setPlayerStatTime(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          return {
            player: playerOverview.player,
            value: playerOverview.time
          }
        })
        .sort((s1, s2) => compareTimes(s2.value, s1.value))
    )
    setPlayerStatPoints(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          return {
            player: playerOverview.player,
            value: playerOverview.points3 * 3 + playerOverview.points2e * 2 + playerOverview.points2i * 2 + playerOverview.points1
          }
        })
        .sort((s1, s2) => {
          return s2.value - s1.value
        })
    )
    setPlayerStatPoints3(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          return {
            player: playerOverview.player,
            value: playerOverview.points3
          }
        })
        .sort((s1, s2) => {
          return s2.value - s1.value
        })
    )
    setPlayerStatPointsPerMatch(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          return {
            player: playerOverview.player,
            value: (playerOverview.points3 * 3 + playerOverview.points2e * 2 + playerOverview.points2i * 2 + playerOverview.points1) / playerOverview.matches
          }
        })
        .sort((s1, s2) => {
          return s2.value - s1.value
        })
    )
    setPlayerStatPointsPerMin(
      overview
        .map((playerOverview: PlayerOverviewModel) => {
          const points = playerOverview.points3 * 3 + playerOverview.points2e * 2 + playerOverview.points2i * 2 + playerOverview.points1
          const timeS = playerOverview.time[0] * 60 + playerOverview.time[1]
          return {
            player: playerOverview.player,
            value: Number((points * 60 / timeS).toFixed(2))
          }
        })
        .sort((s1, s2) => {
          return s2.value - s1.value
        })
    )
  }, [overview])
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-overview']

  return (
    <div className={classes.join(' ')}>OVERVIEW</div>
  )

  return (
    <div className={classes.join(' ')}>

      <h2>Stats Globales</h2>
      <div>
        <div>Total Matches: {data.length}</div>
        <div>Total Players: {overview.length}</div>
      </div>

      <h2>Stats Joueurs</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Match</th>
            <th>#Temps</th>
            <th>Pts</th>
            <th>3P</th>
            <th>2Pe</th>
            <th>2Pi</th>
            <th>LF</th>
            <th>F</th>
          </tr>
        </thead>
        <tbody>
          {overview.map(player => {
            return (
              <tr key={player.player}>
                <td>{player.player}</td>
                <td>{player.matches}</td>
                <td>{timeToString(player.time)}</td>
                <td>{player.points3 * 3 + player.points2e * 2 + player.points2i * 2 + player.points1}</td>
                <td>{player.points3}</td>
                <td>{player.points2e}</td>
                <td>{player.points2i}</td>
                <td>{player.points1}</td>
                <td>{player.fouls}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h2>Matchs joués</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Match</th>
          </tr>
        </thead>
        <tbody>
          {playerStatMatch.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{player.value}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <h2>Temps de jeu</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Temps</th>
          </tr>
        </thead>
        <tbody>
          {playerStatTime.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{timeToString(player.value)}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <h2>Points Marqués</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Points Marqués</th>
          </tr>
        </thead>
        <tbody>
          {playerStatPoints.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{player.value}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <h2>3 Points Marqués</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>3 Points Marqués</th>
          </tr>
        </thead>
        <tbody>
          {playerStatPoints3.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{player.value}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <h2>Points Par Match</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Points par Match</th>
          </tr>
        </thead>
        <tbody>
          {playerStatPointsPerMatch.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{player.value}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>

      <h2>Points Par Minute</h2>
      <table>
        <thead>
          <tr>
            <th>Joueur</th>
            <th>#Points par Minute</th>
          </tr>
        </thead>
        <tbody>
          {playerStatPointsPerMin.map((player, index) => {
            if (index < 5) {
              return (
                <tr key={player.player}>
                  <td>{player.player}</td>
                  <td>{player.value}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  )
  // #endregion
}
