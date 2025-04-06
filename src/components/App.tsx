import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { DataStates } from '@sol.ac/js-utils'

import { loadData } from '../services/DataService'
import { DataSelectors } from '../store/data/data.selectors'

import { AppHeader } from './AppHeader'
import { AppNav } from './AppNav'

import './App.css'
import { AppLoading } from './AppLoading'

export const App = () => {

  // #region Hooks
  const dispatch = useDispatch()
  const ref = useRef(null)
  const dataState = useSelector(DataSelectors.dataState)
  const dataError = useSelector(DataSelectors.dataError)
  const location = useLocation()
  useEffect(() => {
    if (dataState === DataStates.NEVER) {
      loadData(dispatch)
    }
  }, [dataState])
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0
    }
  }, [location])
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
          <AppLoading />
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
          <main className='ap-app-main' ref={ref}>
            <Outlet />
          </main>
          <AppNav />
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
