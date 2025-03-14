import { DataSlice } from '../store/data/data.slice'

export const loadData = async (dispatch: any) => {
  dispatch(DataSlice.actions.getDataRequest())
  return fetch('./data.json')
    .then(response => response.json())
    .then((data: any) => {
      console.log(data)
      dispatch(DataSlice.actions.getDataSuccess(data))
    })
    .catch((error) => {
      dispatch(DataSlice.actions.getDataFailure(error))
    })
}
