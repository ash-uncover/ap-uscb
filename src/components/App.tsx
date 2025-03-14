import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { DataStates } from '@uncover/js-utils'

import { loadData } from '../services/DataService'
import { DataSelectors } from '../store/data/data.selectors'

import { AppHeader } from './AppHeader'
import { AppFooter } from './AppFooter'

import './App.css'

export const App = () => {

  // #region Hooks
  const dispatch = useDispatch()
  const dataState = useSelector(DataSelectors.dataState)
  const dataError = useSelector(DataSelectors.dataError)
  useEffect(() => {
    if (dataState === DataStates.NEVER) {
      loadData(dispatch)
    }
  }, [dataState])
  // #endregion
  
  // #region Rendering
  const classes = ['ap-app']

  switch (dataState) {
    case DataStates.NEVER:
    case DataStates.FETCHING:
    case DataStates.FETCHING_FIRST: {
      classes.push('ap-app--fetching')
      return (
        <div className={classes.join(' ')}>
          LOADING
        </div>
      )
    }
    case DataStates.FAILURE: {
      classes.push('ap-app--failure')
      return (
        <div className={classes.join(' ')}>
          ERROR: ${dataError}
        </div>
      )
    }
    case DataStates.SUCCESS:
    case DataStates.OUTDATED: {
      return (
        <div className={classes.join(' ')}>
          <AppHeader />
          <main className='ap-app-main'>
            <Outlet />
          </main>
          <AppFooter />
        </div>
      )
    }
    default: {
      classes.push('ap-app--failure')
      return (
        <div className={classes.join(' ')}>
          Something strange occured
        </div>
      )
    }
  }
  // #endregion
}
