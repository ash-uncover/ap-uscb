import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataStates } from '@sol.ac/js-utils'

import { extractModels, MatchData } from '../../lib/model'

import { DataModel } from './data.state'

// #region Initial State
const initialState: DataModel = {
  data: [],
  dataState: DataStates.NEVER,
  dataError: '',

  general: {
    players: 0,
    matchs: 0,
    victories: 0,
    draws: 0,
    defeats: 0,
    points: 0,
    points1: 0,
    points2i: 0,
    points2e: 0,
    points3: 0,
    fouls: 0,
    foulsOpponent: 0,
    playersPerMatch: 0,
  },
  matchs: {},
  players: {}
}
// #endregion

// #region Reducers
const getDataRequest: CaseReducer<DataModel, PayloadAction<void>> = (state) => {
  state.dataState = state.dataState === DataStates.NEVER
    ? DataStates.FETCHING_FIRST
    : DataStates.FETCHING
}
interface getDataSuccessPayload {
  data: MatchData[]
}
const getDataSuccess: CaseReducer<DataModel, PayloadAction<getDataSuccessPayload>> = (state, action) => {
  state.dataState = DataStates.SUCCESS
  state.data = action.payload.data
  const {
    general,
    matchs,
    players
  } = extractModels(action.payload.data.filter(matchData => !matchData.ignore))
  state.general = general
  state.matchs = matchs
  state.players = players
}
const getDataFailure: CaseReducer<DataModel, PayloadAction<string>> = (state, action) => {
  state.dataState = DataStates.FAILURE
  state.dataError = action.payload
}
// #endregion

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getDataRequest,
    getDataSuccess,
    getDataFailure
  },
})

export default DataSlice.reducer