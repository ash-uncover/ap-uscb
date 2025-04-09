import { CONFIG } from '../config'
import { DataSlice } from '../store/data/data.slice'

export const loadData = async (dispatch: any, file?: string) => {
  dispatch(DataSlice.actions.getDataRequest())
  return Promise.all([
    new Promise<void>((resolve) => setTimeout(() => resolve(), 1000)),
    fetch(`${CONFIG.AP_USCB_PUBLIC}/${file ? file : 'data'}.json`)
      .then(response => response.json())
  ])
    .then((data: any) => {
      dispatch(DataSlice.actions.getDataSuccess(data[1]))
    })
    .catch((error) => {
      dispatch(DataSlice.actions.getDataFailure(error))
    })
}
