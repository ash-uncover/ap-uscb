import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'

import { CONFIG } from '../config'

import { AppSlice } from '../store/app/app.slice'
import { AppSelectors } from '../store/app/app.selectors'

export const AppHeader = () => {

  // #region > Hooks
  const dispatch = useDispatch()
  const showMenu = useSelector(AppSelectors.showMenu)
  // #endregion

  // #region Callbacks
  function handleButtonMenuClick() {
    if (showMenu) {
      dispatch(AppSlice.actions.closeAppMenu())
    } else {
      dispatch(AppSlice.actions.openAppMenu())
    }
  }
  // #endregion

  // #region > Render
  const classes = ['ap-app-header']
  if (showMenu) classes.push('ap-app-header--show-menu')

  return (
    <header className={classes.join(' ')}>
      <img
        height='90%'
        src={`${CONFIG.AP_USCB_PUBLIC}/logo.png`}
      />
      <span
        style={{ marginTop: '0.25rem' }}
      >
        US Conflans - Basket-ball
      </span>
      <img
        height='90%'
        src={`${CONFIG.AP_USCB_PUBLIC}/logo.png`}
      />
      <button
        className='ap-app-header_menu-button'
        onClick={handleButtonMenuClick}
      >
        <FontAwesomeIcon className='ap-tile-icon' icon={['fas', 'bars']} />
      </button>
    </header>
  )
  // #endregion
}
