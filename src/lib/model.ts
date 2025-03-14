export interface MatchModel {
  date: string
  teamA: string
  teamB: string
  scoreA: number
  scoreB: number
  playersA: PlayerMatchModel[]
}
export interface PlayerMatchModel {
  player: string
  time: TimeModel
  points1: number
  points2i: number
  points2e: number
  points3: number
  fouls: number
}
export interface PlayerOverviewModel extends PlayerMatchModel{
  matches: number
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