import React from 'react'
import { useSelector } from 'react-redux'

import { DATA } from '../lib/data'
import { AppSelectors } from '../store/app/app.selectors'

import { AppHeaderMenuItem } from './AppHeaderMenuItem'

export const AppHeaderMenu = () => {

  // #region > Hooks
  const showMenu = useSelector(AppSelectors.showMenu)
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  if (!showMenu) {
    return null
  }

  const classes = ['ap-app-header-menu']
  return (
    <div className={classes.join(' ')}>     
      {DATA.map(data => {
        return (
          <AppHeaderMenuItem
            key={data.file}
            file={data.file}
            text={data.text}
          />
        )
      })}
    </div>
  )
  // #endregion
}
