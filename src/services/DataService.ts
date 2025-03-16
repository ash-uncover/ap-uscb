import { CONFIG } from '../config'
import { DataSlice } from '../store/data/data.slice'

export const loadData = async (dispatch: any) => {
  dispatch(DataSlice.actions.getDataRequest())
  return fetch(`${CONFIG.AP_USCB_PUBLIC}/data.json`)
    .then(response => response.json())
    .then((data: any) => {
      dispatch(DataSlice.actions.getDataSuccess(data))
    })
    .catch((error) => {
      dispatch(DataSlice.actions.getDataFailure(error))
    })
}
