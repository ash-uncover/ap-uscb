import { 
  getDefaultPlayerModel, 
  getInitialMatchModel,
  getMatchId,
  MatchData 
} from '../src/lib/model'

describe('model', () => {

  /* TEST DATA */


  /* TEST SETUP */

  beforeEach(() => {
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })


  /* TEST CASES */

  // #region getMatchId
  describe('getMatchId', () => {

    test('', () => {
      // Declaration
      const matchData: MatchData = {
        date: '1/2/3',
        score: 1,
        home: true,
        opponent: 'opponent',
        foulsOpponent: 2,
        scoreOpponent: 3,
        players: []
      }
      // Execution
      const matchId = getMatchId(matchData)
      // Assertions
      expect(matchId).toEqual('1-2-3')
    })
  })
  // #endregion

  // #region getInitialMatchModel
  describe('getInitialMatchModel', () => {

    test('', () => {
      // Declaration
      const matchData: MatchData = {
        date: 'date',
        score: 1,
        home: true,
        opponent: 'opponent',
        foulsOpponent: 2,
        scoreOpponent: 3,
        players: []
      }
      // Execution
      const matchModel = getInitialMatchModel(matchData)
      // Assertions
      expect(matchModel).toEqual({
        date: getMatchId(matchData),
        score: matchData.score,
        home: matchData.home,
        opponent: matchData.opponent,
        scoreOpponent: matchData.scoreOpponent,
        foulsOpponent: matchData.foulsOpponent,
        players: [],
        fouls: 0,
        points1: 0,
        points2i: 0,
        points2e: 0,
        points3: 0,
      })
    })
  })
  // #endregion

  // #region getDefaultPlayerModel
  describe('getDefaultPlayerModel', () => {

    test('build correct object', () => {
      // Declaration
      const player = 'MyPlayer'
      // Execution
      const playerModel = getDefaultPlayerModel(player)
      // Assertions
      expect(playerModel).toEqual({
        player,
        time: [0, 0],
        points: 0,
        points1: 0,
        points2i: 0,
        points2e: 0,
        points3: 0,
        fouls: 0,
        matchs: 0,
        pointsPerMatch: 0,
        pointsPerMin: 0,
        foulsPerMatch: 0,
        foulsPerMin: 0,
        timePerMatch: [0, 0],
      })
    })
  })
  // #endregion
})