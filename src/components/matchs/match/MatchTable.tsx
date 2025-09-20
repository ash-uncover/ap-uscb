import React from 'react'

export const MatchTable = ({
  children
}) => {

  // #region > Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-match-table ap-table']

  return (
    <table className={classes.join(' ')}>
      <thead>
        <tr>
          <th>Joueur</th>
          <th>Temps</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
  // #endregion
}
