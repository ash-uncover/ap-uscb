import React, { useEffect } from 'react'
import { Outlet, useLocation, useMatch, useParams } from 'react-router-dom'

import './App.css'
import { AppHeader } from './AppHeader'
import { AppFooter } from './AppFooter'

export const App = () => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-app']

  return (
    <div className={classes.join(' ')}>
      <AppHeader />
      <main className='ap-app-main'>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
  // #endregion
}
