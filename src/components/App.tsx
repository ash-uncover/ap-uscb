import React, { useEffect, useRef, useState } from 'react'
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
  const refScroll = useRef(0)
  const dataState = useSelector(DataSelectors.dataState)
  const dataError = useSelector(DataSelectors.dataError)
  const location = useLocation()
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    if (dataState === DataStates.NEVER) {
      const params = new URLSearchParams(location.search)
      loadData(dispatch, params.get('data'))
    }
  }, [dataState])
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0
      refScroll.current = 0
      setScrolling(false)  
    }
  }, [location])
  // #endregion

  // #region Callbacks
  function handleScrollMain(e: any) {
    if (e.target.scrollTop > 40) {
      const scrolling = refScroll.current < e.target.scrollTop
      setScrolling(scrolling)
    }
    refScroll.current = e.target.scrollTop
  }
  // #endregion
  
  // #region Rendering
  const classes = ['ap-app']
  if (scrolling) {
    classes.push('ap-app--scrolled')
  }
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
          <main 
            onScroll={handleScrollMain}
            className='ap-app-main' 
            ref={ref}
          >
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
