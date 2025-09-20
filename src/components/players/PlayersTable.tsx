import React from 'react'

export const PlayersTable = ({
  children
}) => {

  // #region > Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-players-table ap-table']

  return (
    <table className={classes.join(' ')}>
      <thead>
        <tr>
          <th>Joueur</th>
          <th>Matchs</th>
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
