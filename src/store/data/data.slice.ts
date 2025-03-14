import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DataStates } from '@uncover/js-utils'

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
    points: 0,
    fouls: 0,
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
  } = extractModels(action.payload.data)
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