import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { DataSelectors } from '../../store/data/data.selectors'
import { Title } from '../common/title/Title'
import { TitleLevels } from '../common/title/TitleLevels'
import { PlayerModel } from 'src/lib/model'

export interface OverviewTableProperties {
  title: string
  stat: string
  compare: (p1: PlayerModel, p2: PlayerModel) => number
  formatter: (p: PlayerModel) => string
}
export const OverviewTable = ({
  title,
  stat,
  compare,
  formatter
}) => {

  // #region Hooks
  const players = useSelector(DataSelectors.players)
  const [more, setMore] = useState<boolean>(false)
  const [data, setData] = useState([])
  useEffect(() => {
    setData(Object.values(players).sort(compare))
  }, [players])
  // #endregion

  // #region Callbacks
  function handleMoreClick() {
    setMore(!more)
  }
  // #endregion

  // #region Rendering
  const classes = ['ap-overview-table ap-table']

  return (
    <>
      <Title
        level={TitleLevels.H4}
        size={TitleLevels.H4}
      >
        {title}
      </Title>
      <table className={classes.join(' ')}>
        <thead>
          <tr>
            <th className='table-head-cell--rank'></th>
            <th className='table-head-cell--player'>Joueur</th>
            <th className='table-head-cell--stat'>{stat}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index) => {
            if (!more && index > 2) {
              return null
            }
            return (
              <tr
                key={player.player}
              >
                <td className='table-cell--rank'>
                  {`#${index + 1}`}
                </td>
                <td className='table-cell--player'>
                  <Link to={`/players/${player.player}`}>{player.player}</Link>
                </td>
                <td  className='table-cell--stat'>
                  {formatter(player)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{textAlign: 'right'}}>
      <button 
        className='ap-overview-table-button-more'
        onClick={handleMoreClick}
      >
        {more ? 'Voir moins' : 'Voir plus'}
      </button>
      </div>
    </>
  )
  // #endregion
}
