import { createSlice } from '@reduxjs/toolkit'
import { DataModel } from './data.state'

const initialState: DataModel = {
  data: [{
    // #region 2024/11/10
    date: '2024/11/10',
    scoreA: 47,
    scoreB: 64,
    teamA: 'Noisy Bailly',
    teamB: 'USCB',
    playersA: [{
      player: 'Sebastien',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Bernard',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Rui',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Lucas',
      time: [0, 0],
      points3: 0,
      points2i: 6,
      points2e: 0,
      points1: 4,
      fouls: 0
    }, {
      player: 'Vincent B',
      time: [0, 0],
      points3: 0,
      points2i: 9,
      points2e: 0,
      points1: 4,
      fouls: 0
    }, {
      player: 'Theo',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Jeremie',
      time: [0, 0],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [0, 0],
      points3: 1,
      points2i: 4,
      points2e: 0,
      points1: 1,
      fouls: 0
    }, {
      player: 'Vincent H',
      time: [0, 0],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 0,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2024/11/10
    date: '2024/11/10',
    scoreA: 47,
    scoreB: 64,
    teamA: 'Noisy Bailly',
    teamB: 'USCB',
    playersA: [{
      player: 'Sebastien',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Bernard',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Rui',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Lucas',
      time: [0, 0],
      points3: 0,
      points2i: 6,
      points2e: 0,
      points1: 4,
      fouls: 0
    }, {
      player: 'Vincent B',
      time: [0, 0],
      points3: 0,
      points2i: 9,
      points2e: 0,
      points1: 4,
      fouls: 0
    }, {
      player: 'Theo',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Jeremie',
      time: [0, 0],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [0, 0],
      points3: 1,
      points2i: 4,
      points2e: 0,
      points1: 1,
      fouls: 0
    }, {
      player: 'Vincent H',
      time: [0, 0],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 0,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2024/11/17
    date: '2024/11/17',
    scoreA: 38,
    scoreB: 47,
    teamA: 'USCB',
    teamB: 'Maisons Laffite',
    playersA: [{
      player: 'Jeremie',
      time: [14, 43],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Arnaud',
      time: [22, 52],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Philippe',
      time: [30, 36],
      points3: 1,
      points2i: 1,
      points2e: 1,
      points1: 0,
      fouls: 0
    }, {
      player: 'Fabien',
      time: [33, 14],
      points3: 0,
      points2i: 3,
      points2e: 0,
      points1: 5,
      fouls: 0
    }, {
      player: 'Lucas',
      time: [22, 36],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 4,
      fouls: 0
    }, , {
      player: 'Theo',
      time: [4, 18],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Jean Baptiste',
      time: [34, 36],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Guillaume D',
      time: [5, 30],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [22, 42],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Vincent H',
      time: [7, 48],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2024/11/24
    date: '2024/11/24',
    scoreA: 59,
    scoreB: 46,
    teamA: 'US PECQ',
    teamB: 'USCB',
    playersA: [{
      player: 'Bernard',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Arnaud',
      time: [23, 53],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Philippe',
      time: [36, 25],
      points3: 1,
      points2i: 1,
      points2e: 1,
      points1: 2,
      fouls: 2
    }, {
      player: 'Lucas',
      time: [32, 20],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 4,
      fouls: 2
    }, {
      player: 'Vincent B',
      time: [30, 7],
      points3: 0,
      points2i: 5,
      points2e: 0,
      points1: 6,
      fouls: 3
    }, {
      player: 'Antoine',
      time: [11, 38],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Theo',
      time: [16, 8],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 4
    }, {
      player: 'Guillaume D',
      time: [22, 22],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [22, 44],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 4,
      fouls: 2
    }]
    // #endregion
  }, {
    // #region 2024/12/01
    date: '2024/12/01',
    scoreA: 46,
    scoreB: 70,
    teamA: 'USCB',
    teamB: 'Mesnil Le Roi Acheres',
    playersA: [{
      player: 'Jeremie',
      time: [23, 2],
      points3: 0,
      points2i: 1,
      points2e: 1,
      points1: 0,
      fouls: 2
    }, {
      player: 'Arnaud',
      time: [21, 39],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Philippe',
      time: [36, 45],
      points3: 1,
      points2i: 1,
      points2e: 1,
      points1: 2,
      fouls: 2
    }, {
      player: 'Lucas',
      time: [23, 35],
      points3: 1,
      points2i: 4,
      points2e: 1,
      points1: 1,
      fouls: 1
    }, {
      player: 'Theo',
      time: [10, 21],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 1,
      fouls: 0
    }, {
      player: 'Jean Baptiste',
      time: [33, 42],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Guillaume D',
      time: [23, 32],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Olivier',
      time: [27, 41],
      points3: 0,
      points2i: 5,
      points2e: 1,
      points1: 2,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2024/12/08
    date: '2024/12/08',
    scoreA: 57,
    scoreB: 100,
    teamA: 'USCB',
    teamB: 'Andresy Chanteloup Maurecourt',
    playersA: [{
      player: 'Jean-Michel',
      time: [34, 8],
      points3: 4,
      points2i: 1,
      points2e: 0,
      points1: 6,
      fouls: 0
    }, {
      player: 'Antoine',
      time: [14, 49],
      points3: 0,
      points2i: 0,
      points2e: 1,
      points1: 0,
      fouls: 0
    }, {
      player: 'Arnaud',
      time: [26, 12],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Philippe',
      time: [10, 6],
      points3: 1,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Lucas',
      time: [10, 27],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 3,
      fouls: 1
    }, {
      player: 'Theo',
      time: [11, 48],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Jean Baptiste',
      time: [35, 43],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Guillaume R',
      time: [26, 5],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [30, 43],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 7,
      fouls: 5
    }]
    // #endregion
  }, {
    // #region 2024/12/15
    date: '2024/12/15',
    scoreA: 68,
    scoreB: 41,
    teamA: 'Verneuil Sur Seine',
    teamB: 'USCB',
    playersA: [{
      player: 'Jean-Michel',
      time: [13, 1],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Jeremie',
      time: [25, 9],
      points3: 1,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Antoine',
      time: [8, 58],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Philippe',
      time: [28, 7],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Guillaume R',
      time: [10, 49],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Adrian',
      time: [28, 36],
      points3: 1,
      points2i: 3,
      points2e: 0,
      points1: 4,
      fouls: 2
    }, {
      player: 'Eduardo',
      time: [17, 7],
      points3: 0,
      points2i: 0,
      points2e: 1,
      points1: 0,
      fouls: 1
    }, {
      player: 'Jean Baptiste',
      time: [20, 44],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Olivier',
      time: [28, 38],
      points3: 0,
      points2i: 6,
      points2e: 0,
      points1: 3,
      fouls: 3
    }, {
      player: 'Vincent H',
      time: [18, 51],
      points3: 0,
      points2i: 3,
      points2e: 0,
      points1: 0,
      fouls: 1
    }]
    // #endregion
  }, {
    // #region 2025/01/25
    date: '2025/01/25',
    scoreA: 32,
    scoreB: 30,
    teamA: 'Houilles',
    teamB: 'USCB',
    playersA: [{
      player: 'Guillaume R',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Theo',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 4
    }, {
      player: 'Adrian',
      time: [0, 0],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 1,
      fouls: 1
    }, {
      player: 'Philippe',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 5
    }, {
      player: 'Lucas',
      time: [0, 0],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 1,
      fouls: 4
    }, {
      player: 'Vincent B',
      time: [0, 0],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 0,
      fouls: 5
    }, {
      player: 'Jean Baptiste',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Guillaume D',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [0, 0],
      points3: 1,
      points2i: 2,
      points2e: 0,
      points1: 1,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2025/02/02
    date: '2025/02/02',
    scoreA: 68,
    scoreB: 48,
    teamA: 'USCB',
    teamB: 'Chatou Croissy',
    playersA: [{
      player: 'Jean-Michel',
      time: [21, 2],
      points3: 2,
      points2i: 0,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Guillaume R',
      time: [12, 39],
      points3: 0,
      points2i: 0,
      points2e: 1,
      points1: 0,
      fouls: 2
    }, {
      player: 'Arnaud',
      time: [26, 40],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 2,
      fouls: 2
    }, {
      player: 'Philippe',
      time: [35, 35],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 1,
      fouls: 2
    }, {
      player: 'Lucas',
      time: [20, 25],
      points3: 0,
      points2i: 11,
      points2e: 0,
      points1: 5,
      fouls: 1
    }, {
      player: 'Theo',
      time: [10, 28],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 4
    }, {
      player: 'Jean Baptiste',
      time: [17, 7],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 1,
      fouls: 2
    }, {
      player: 'Guillaume D',
      time: [16, 33],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Olivier',
      time: [19, 51],
      points3: 0,
      points2i: 3,
      points2e: 0,
      points1: 4,
      fouls: 2
    }, {
      player: 'Vincent H',
      time: [19, 36],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 1,
      fouls: 0
    }]
    // #endregion
  }, {
    // #region 2025/02/09
    date: '2025/02/09',
    scoreA: 42,
    scoreB: 73,
    teamA: 'Andresy Chanteloup Maurecourt',
    teamB: 'USCB',
    playersA: [{
      player: 'Jean-Michel',
      time: [20, 46],
      points3: 1,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Ugo',
      time: [12, 50],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Arnaud',
      time: [18, 20],
      points3: 0,
      points2i: 3,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Philippe',
      time: [29, 8],
      points3: 1,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Antoine',
      time: [12, 41],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 0,
      fouls: 2
    }, {
      player: 'Lucas',
      time: [18, 4],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 2,
      fouls: 1
    }, {
      player: 'Adrian',
      time: [27, 25],
      points3: 0,
      points2i: 3,
      points2e: 0,
      points1: 0,
      fouls: 1
    }, {
      player: 'Olivier',
      time: [29, 12],
      points3: 0,
      points2i: 1,
      points2e: 2,
      points1: 1,
      fouls: 1
    }, {
      player: 'Theo',
      time: [12, 22],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 1,
      fouls: 3
    }, {
      player: 'Jean Baptiste',
      time: [19, 12],
      points3: 0,
      points2i: 1,
      points2e: 0,
      points1: 0,
      fouls: 2
    }]
    // #endregion
  }, {
    // #region 2025/03/09
    date: '2025/03/09',
    scoreA: 55,
    scoreB: 61,
    teamA: 'USCB',
    teamB: 'Montesson',
    playersA: [{
      player: 'Jean-Michel',
      time: [11, 54],
      points3: 5,
      points2i: 0,
      points2e: 0,
      points1: 2,
      fouls: 0
    }, {
      player: 'Antoine',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Sébastien',
      time: [11, 54],
      points3: 0,
      points2i: 0,
      points2e: 1,
      points1: 0,
      fouls: 2
    }, {
      player: 'Arnaud',
      time: [21, 54],
      points3: 0,
      points2i: 2,
      points2e: 1,
      points1: 4,
      fouls: 4
    }, {
      player: 'Philippe',
      time: [14, 16],
      points3: 0,
      points2i: 3,
      points2e: 1,
      points1: 1,
      fouls: 1
    }, {
      player: 'Lucas',
      time: [21, 54],
      points3: 0,
      points2i: 2,
      points2e: 0,
      points1: 1,
      fouls: 0
    }, {
      player: 'Vincent B',
      time: [17, 38],
      points3: 0,
      points2i: 4,
      points2e: 0,
      points1: 3,
      fouls: 5
    }, {
      player: 'Theo',
      time: [0, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 0,
      fouls: 0
    }, {
      player: 'Guillaume D',
      time: [10, 0],
      points3: 0,
      points2i: 0,
      points2e: 0,
      points1: 1,
      fouls: 2
    }]
    // #endregion
  }]
}

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
})

export const {
} = DataSlice.actions

export default DataSlice.reducer