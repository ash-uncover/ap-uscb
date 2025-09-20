import { createSlice } from '@reduxjs/toolkit'
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { AppModel } from './app.state'

const initialState: AppModel = {
  loaded: false,
  showMenu: false
}

// #region Reducers
const openAppMenu: CaseReducer<AppModel, PayloadAction<void>> = (state) => {
  state.showMenu = true
}
const closeAppMenu: CaseReducer<AppModel, PayloadAction<void>> = (state) => {
  state.showMenu = false
}
// #endregion

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openAppMenu,
    closeAppMenu
  },
})

export default AppSlice.reducer