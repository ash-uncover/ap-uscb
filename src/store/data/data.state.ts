import { DataState } from '@sol.ac/js-utils';
import { GeneralModel, MatchData, MatchModel, PlayerModel } from '../../lib/model';

export interface DataModel {
  data: MatchData[]
  dataState: DataState
  dataError: string

  general: GeneralModel
  matchs: Record<string, MatchModel>
  players: Record<string, PlayerModel>
}