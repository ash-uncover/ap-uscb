import { DataState } from '@sol.ac/js-utils'

import { GeneralModel, MatchData, MatchModel, PlayerModel } from '../../lib/model'

import { RootState } from '../state'
import { DataModel } from './data.state'

export const base = (state: RootState): DataModel => state.data

export const dataFile = (state: RootState): string => base(state).dataFile
export const data = (state: RootState): MatchData[] => base(state).data
export const dataState = (state: RootState): DataState => base(state).dataState
export const dataError = (state: RootState): string => base(state).dataError

export const general = (state: RootState): GeneralModel => base(state).general
export const matchs = (state: RootState): Record<string, MatchModel> => base(state).matchs
export const match = (id: string) => (state: RootState): MatchModel => matchs(state)[id]
export const players = (state: RootState): Record<string, PlayerModel> => base(state).players
export const player = (id: string) => (state: RootState): PlayerModel => players(state)[id]

export const DataSelectors = {
  dataFile,
  data,
  dataState,
  dataError,

  general,
  matchs,
  match,
  players,
  player
}
