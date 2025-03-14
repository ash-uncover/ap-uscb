import { MatchModel } from 'src/lib/model'
import { RootState } from '../state'
import { DataModel } from './data.state'

export const base = (state: RootState): DataModel => state.data

export const data = (state: RootState): MatchModel[] => base(state).data

export const DataSelectors = {
  data,
}
