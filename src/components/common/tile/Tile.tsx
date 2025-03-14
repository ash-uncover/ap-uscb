import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Tile.css'

export interface TileProperties {
  text: string
  desc?: string
  icon?: IconProp
  onClick?: () => void
}

export const Tile = ({
  text,
  desc,
  icon,
  onClick
}: TileProperties) => {

  // #region Hooks
  // #endregion

  // #region Callbacks
  function handleClick() {
    if (onClick) {
      onClick()
    }
  }
  // #endregion

  // #region Rendering
  const classes = ['ap-tile']
  if (desc) {
    classes.push('ap-tile--descripted')
  }
  if (icon) {
    classes.push('ap-tile--iconed')
  }
  if (onClick) {
    classes.push('ap-tile--clickable')
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <div className='ap-tile-background ap-tile-layer'>
        {icon
          ? <FontAwesomeIcon className='ap-tile-icon' icon={icon} />
          : null
        }
      </div>
      <div className='ap-tile-content ap-tile-layer'>
        <div className='ap-tile-text'>
          {text}
        </div>
        <div className='ap-tile-desc'>
          {desc}
        </div>
      </div>
    </div>
  )
  // #endregion
}
