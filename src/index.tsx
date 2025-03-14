import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  Provider
} from 'react-redux'

import {
  Route,
  Routes,
  HashRouter,
  Navigate,
} from 'react-router-dom'

// Import icons
import 'lib/icons'

// Should be imported before first access to the reducers
import { store } from './store'
import { App } from './components/App'
import { Overview } from './components/overview/Overview'
import { Players } from './components/players/Players'
import { Player } from './components/players/player/Player'
import { Matches } from './components/matches/Matches'
import { Match } from './components/matches/match/Match'

let Router = HashRouter

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

root.render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='players' element={<Players />} />
          <Route path='players/:playerId' element={<Player />} />
          <Route path='matches' element={<Matches />} />
          <Route path='matches/:matchId' element={<Match />} />
          <Route path='' element={<Overview />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
)
