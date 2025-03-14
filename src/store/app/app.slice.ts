import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppModel } from './app.state'

const initialState: AppModel = {
  loaded: false
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const {
} = AppSlice.actions

export default AppSlice.reducer