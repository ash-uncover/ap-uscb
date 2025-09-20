import React from 'react'

export const MatchsTable = ({
  children
}) => {

  // #region > Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region > Render
  const classes = ['ap-matchs-table ap-table']

  return (
    <table className={classes.join(' ')}>
      <tbody>
        {children}
      </tbody>
    </table>
  )
  // #endregion
}
