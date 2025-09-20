import { RootState } from '../state'
import { AppModel } from './app.state'

export const base = (state: RootState): AppModel => state.app

export const showMenu = (state: RootState): boolean => base(state).showMenu

export const AppSelectors = {
  showMenu
}
