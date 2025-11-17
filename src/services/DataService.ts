import { DATA } from '../lib/data'
import { CONFIG } from '../config'
import { DataSlice } from '../store/data/data.slice'

export const loadData = async (dispatch: any, file?: string) => {
  const finalFile = DATA.find(d => d.file === file)?.file || DATA[0].file
  const format = finalFile.includes('u13') ? 170 : 200
  dispatch(DataSlice.actions.getDataRequest(finalFile))
  return Promise.all([
    new Promise<void>((resolve) => setTimeout(() => resolve(), 1000)),
    fetch(`${CONFIG.AP_USCB_PUBLIC}/${finalFile}.json`)
      .then(response => response.json())
  ])
    .then((data: any) => {
      dispatch(DataSlice.actions.getDataSuccess({
        ...data[1],
        format
      }))
    })
    .catch((error) => {
      dispatch(DataSlice.actions.getDataFailure(error))
    })
}
