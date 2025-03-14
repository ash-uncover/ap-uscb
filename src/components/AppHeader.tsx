import React from 'react'

export const AppHeader = () => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  // #endregion

  // #region Rendering
  const classes = ['ap-app-header']

  return (
    <header className={classes.join(' ')}>
      <img height='90%' src='/logo.png' />
      <span style={{marginTop: '0.25rem'}}>US Conflans - Basket-ball</span>
      <img height='90%' src='/logo.png' />
    </header>
  )
  // #endregion
}
