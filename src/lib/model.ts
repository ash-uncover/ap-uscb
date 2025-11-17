import { addTimes, asPercentage, avgTime, compareTimes, fromPercentage, subTimes, timeToSeconds, timeToString, valuePerMin } from "./time"

export const TEAM = 'Conflans'

// #region Data
export interface MatchData {
  date: string
  score: number
  home: boolean
  ignore?: boolean
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

export const getMatchId = (match: MatchData): string => {
  return match.date.split('/').join('-')
}

export const getInitialMatchModel = (match: MatchData): MatchModel => {
  return {
    date: getMatchId(match),
    score: match.score,
    home: match.home,
    opponent: match.opponent,
    scoreOpponent: match.scoreOpponent,
    foulsOpponent: match.foulsOpponent,
    players: [],
    fouls: 0,
    points1: 0,
    points2i: 0,
    points2e: 0,
    points3: 0,
  }
}

export const getDefaultPlayerModel = (player: string): PlayerModel => {
  return {
    player,
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
}

export const extractModels = (data: MatchData[], matchFormat: number = 200): {
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
      const matchId = getMatchId(matchData)
      if (acc.matchs[matchId]) {
        // console.warn(`Match already defined '${matchId}', ignoring`)
        return acc
      }
      const matchModel = getInitialMatchModel(matchData)

      if (matchData.score === matchData.scoreOpponent) {
        draws++
      } else if (matchData.score > matchData.scoreOpponent) {
        victories++
      } else {
        defeats++
      }
      playersPerMatch += matchData.players.length

      matchData.players.forEach((playerData) => {
        let playerModel = acc.players[playerData.player]
        if (!playerModel) {
          playerModel = getDefaultPlayerModel(playerData.player)
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
  interface PlayerTime {
    playTime: TimeModel
    matchTime: TimeModel
    playPercentage: number
  }
  const playersTimes: Record<string, PlayerTime> = Object.values(matchs).reduce((acc, match) => {
    const matchTime = addTimes(match.players.map(p => p.time))
    // if (compareTimes([190, 0], matchTime) <= 0) {
    // }
      match.players.forEach((player) => {
        let playerTime = acc[player.player]
        if (!playerTime) {
          playerTime = {
            playTime: [0, 0],
            playPercentage: 0,
            matchTime: [0, 0]
          }
          acc[player.player] = playerTime
        }
        playerTime.playTime = addTimes([playerTime.playTime, player.time])
        playerTime.matchTime = addTimes([playerTime.matchTime, matchTime])
      })
    return acc
  }, {})
  Object.values(playersTimes).forEach((playerTime) => {
    playerTime.playPercentage = asPercentage(playerTime.matchTime, playerTime.playTime)
  })
  // console.log(playersTimes)

  Object.values(matchs).forEach(match => {
    const matchTime = addTimes(match.players.map(p => p.time))
    // console.log(match.date, timeToString(matchTime), 'scores check', match.score, match.players.reduce((a, p) => a + p.points1 + p.points2e * 2 + p.points2i * 2 + p.points3 * 3, 0))
    if (compareTimes([matchFormat - 10, 0], matchTime) > 0) {
      // console.log(' >> Les temps de jeu seront mis a jour pour ce match')
      const missingTime = subTimes([matchFormat, 0], matchTime)
      const totalPlayerPerct = match.players.reduce((acc, player) => {
        return acc + playersTimes[player.player].playPercentage
      }, 0)
      // console.log(' >> Temps manquant:', missingTime, '- Total Perct: ', totalPlayerPerct)
      match.players.forEach(player => {
        const realPerct = 100 * playersTimes[player.player].playPercentage / totalPlayerPerct
        const computedTime = fromPercentage(missingTime, realPerct)
        player.time = addTimes([player.time, computedTime])
        player.pointsPerMin = valuePerMin(player.points, player.time)
        player.foulsPerMin = valuePerMin(player.fouls, player.time)
      })
    }
  })

  Object.values(players).forEach(player => {
    // Update player time
    //console.log('Update player time from', player.player, player.time);
    const computedTime: TimeModel = Object.values(matchs).reduce((acc: TimeModel, match) => {
      return addTimes([acc, (match.players.find(p => p.player === player.player)?.time) || [0, 0]])
    }, [0, 0]);
    //console.log('  to', computedTime);
    player.time = computedTime
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