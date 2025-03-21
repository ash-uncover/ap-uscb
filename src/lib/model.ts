import { addTimes, avgTime, compareTimes, timeToSeconds, timeToString, valuePerMin } from "./time"

export const TEAM = 'Conflans'

// #region Data
export interface MatchData {
  date: string
  score: number
  home: boolean
  opponent: string
  foulsOpponent: number
  scoreOpponent: number
  players: PlayerMatchData[]
}
export interface PlayerMatchData {
  player: string
  time: TimeModel
  points1: number
  points2i: number
  points2e: number
  points3: number
  fouls: number
}
// #endregion

// #region General
export interface GeneralModel {
  players: number
  matchs: number
  victories: number
  draws: number
  defeats: number
  points: number
  fouls: number
  points1: number
  points2i: number
  points2e: number
  points3: number
  foulsOpponent: number
  playersPerMatch: number
}
// #endregion

// #region Match
export interface MatchModel {
  date: string
  home: boolean
  opponent: string
  score: number
  scoreOpponent: number
  foulsOpponent: number
  players: PlayerMatchModel[]
  points1: number
  points2i: number
  points2e: number
  points3: number
  fouls: number
}
export interface PlayerMatchModel extends PlayerMatchData {
  points: number
  pointsPerMin: number
  foulsPerMin: number
}
// #endregion

// #region Player
export interface PlayerModel extends PlayerMatchData {
  matchs: number
  points: number
  pointsPerMatch: number
  pointsPerMin: number
  foulsPerMatch: number
  foulsPerMin: number
  timePerMatch: TimeModel
}
export type TimeModel = [
  m: number,
  s: number
]
export interface PlayerStat {
  player: string
  value: number
}
export interface PlayerStatTime {
  player: string
  value: TimeModel
}
// #endregion

export const extractModels = (data: MatchData[]): {
  general: GeneralModel,
  matchs: Record<string, MatchModel>,
  players: Record<string, PlayerModel>
} => {
  let victories = 0
  let draws = 0
  let defeats = 0
  let playersPerMatch = 0
  const {
    matchs,
    players
  } = data.reduce(
    (acc: { matchs: Record<string, MatchModel>, players: Record<string, PlayerModel> }, matchData) => {
      const matchId = matchData.date.split('/').join('-')
      if (acc.matchs[matchId]) {
        console.warn(`Match already defined '${matchId}', ignoring`)
        return acc
      }
      const matchModel = {
        date: matchId,
        score: matchData.score,
        home: matchData.home,
        opponent: matchData.opponent,
        scoreOpponent: matchData.scoreOpponent,
        foulsOpponent: matchData.foulsOpponent,
        players: [],
        fouls: 0,
        points1: 0,
        points2i: 0,
        points2e: 0,
        points3: 0,
      }

      if (matchData.score === matchData.scoreOpponent) {
        draws++
      } else if (matchData.score > matchData.scoreOpponent) {
        victories++
      } else {
        defeats++
      }
      playersPerMatch += matchData.players.length
      const matchTime = addTimes(matchData.players.map(p => p.time))
      console.log(matchData.date, timeToString(matchTime))
      if (compareTimes([190,0], matchTime) > 0) {
        console.log(' > should update')
      }
      matchData.players.forEach((playerData) => {
        let playerModel = acc.players[playerData.player]
        if (!playerModel) {
          playerModel = {
            player: playerData.player,
            time: [0, 0],
            points: 0,
            points1: 0,
            points2i: 0,
            points2e: 0,
            points3: 0,
            fouls: 0,
            matchs: 0,
            pointsPerMatch: 0,
            pointsPerMin: 0,
            foulsPerMatch: 0,
            foulsPerMin: 0,
            timePerMatch: [0, 0],
          }
          acc.players[playerData.player] = playerModel
        }
        const points = playerData.points1 + playerData.points2e * 2 + playerData.points2i * 2 + playerData.points3 * 3
        playerModel.time = addTimes([playerModel.time, playerData.time])
        playerModel.points += points
        playerModel.points1 += playerData.points1
        playerModel.points2i += playerData.points2i
        playerModel.points2e += playerData.points2e
        playerModel.points3 += playerData.points3
        playerModel.fouls += playerData.fouls
        playerModel.matchs++

        const playerMatchModel: PlayerMatchModel = {
          ...playerData,
          points,
          pointsPerMin: 0,
          foulsPerMin: 0
        }
        playerMatchModel.pointsPerMin = valuePerMin(playerMatchModel.points, playerData.time)
        playerMatchModel.foulsPerMin = valuePerMin(playerMatchModel.fouls, playerData.time)
        matchModel.fouls += playerMatchModel.fouls
        matchModel.points1 += playerMatchModel.points1
        matchModel.points2e += playerMatchModel.points2e
        matchModel.points2i += playerMatchModel.points2i
        matchModel.points3 += playerMatchModel.points3
        matchModel.players.push(playerMatchModel)
      })
      acc.matchs[matchId] = matchModel
      return acc
    },
    { matchs: {}, players: {} }
  )

  // Fix time issues
  

  Object.values(players).forEach(player => {
    player.pointsPerMatch = player.points / player.matchs
    player.pointsPerMin = valuePerMin(player.points, player.time)
    player.foulsPerMatch = player.fouls / player.matchs
    player.foulsPerMin = valuePerMin(player.fouls, player.time)
    player.timePerMatch = avgTime(player.time, player.matchs)
  })

  const general = {
    players: Object.keys(players).length,
    matchs: Object.keys(matchs).length,
    victories,
    draws,
    defeats,
    points: Object.values(matchs).reduce((acc, match) => acc + match.score, 0),
    points1: Object.values(matchs).reduce((acc, match) => acc + match.points1, 0),
    points2i: Object.values(matchs).reduce((acc, match) => acc + match.points2i, 0),
    points2e: Object.values(matchs).reduce((acc, match) => acc + match.points2e, 0),
    points3: Object.values(matchs).reduce((acc, match) => acc + match.points3, 0),
    fouls: Object.values(matchs).reduce((acc, match) => acc + match.fouls, 0),
    foulsOpponent: Object.values(matchs).reduce((acc, match) => acc + match.foulsOpponent, 0),
    playersPerMatch: playersPerMatch / Object.keys(matchs).length
  }

  return {
    general,
    matchs,
    players
  }
}