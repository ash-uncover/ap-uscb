import React from 'react'

export interface MatchResultProperties {
  team1: string
  score1: number
  team2: string
  score2: number
}
export const MatchResult = ({
  team1,
  score1,
  team2,
  score2
}: MatchResultProperties) => {

  // #region > Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-match-result']
  const classesSide1 = ['ap-match-result-side']
  const classesSide2 = ['ap-match-result-side']
  if (score1 > score2) {
    classesSide1.push('ap-match-result-side--winner')
  } else {
    classesSide2.push('ap-match-result-side--winner')
  }
  return (
    <div className={classes.join(' ')}>
      <div className={classesSide1.join(' ')}>
        <div className='ap-match-result-team'>
          {team1}
        </div>
        <div className='ap-match-result-score'>
          {score1}
        </div>
      </div>
      <div className={classesSide2.join(' ')}>
        <div className='ap-match-result-team'>
          {team2}
        </div>
        <div className='ap-match-result-score'>
          {score2}
        </div>
      </div>
    </div>
  )
  // #endregion
}
