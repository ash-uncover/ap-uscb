import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppSlice } from '../store/app/app.slice'
import { DataSelectors } from '../store/data/data.selectors'

interface AppHeaderMenuItemProperties {
  file: string
  text: string
}

export const AppHeaderMenuItem = ({
  file,
  text
}: AppHeaderMenuItemProperties) => {

  // #region > Hooks
  const [selected, setSelected] = React.useState<boolean>(false)
  const dataFile = useSelector(DataSelectors.dataFile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  React.useEffect(() => {
    setSelected(dataFile === file)
  }, [file, dataFile])
  // #endregion

  // #region Callbacks
  function handleClick() {
    if (!selected) {
      dispatch(AppSlice.actions.closeAppMenu())
      navigate(`/?data=${file}`)
    }
  }
  // #endregion

  // #region > Render
  const classes = ['ap-app-header-menu-item']
  if (selected) classes.push('ap-app-header-menu-item--selected')
  return (
    <div
      className={classes.join(' ')}
      onClick={handleClick}
    >
      {text}
    </div>
  )
  // #endregion
}
