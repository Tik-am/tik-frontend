import React, { useEffect, useState } from 'react'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import {
  Paper
} from '../../components'

const Favorite = ({
  className
}) => {
  const [favoritesData, setFavoritesData] = useState(null)

  useEffect(() => {
    setFavoritesData(null)
    setTimeout(() => {
      setFavoritesData(eventsData && eventsData.allEventDataForMainPages.Cinema)
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  return (
    <Paper className={`Favorite flexible jCenter wrap ${className}`}>
      <Paper className='FavoriteTitle'>Favorite</Paper>
      <Paper className='flexible jBetween wrap '>
        {favoritesData && favoritesData.map((item) => (
          <NavLink to={'/events/' + item.id} key={item.id.toString()}>
            <Paper
              className='EventItem'
              style={{
                backgroundImage: `url(${item.src})`,
                width: '230px',
                height: '350px'
              }}
            />
          </NavLink>
        ))}
      </Paper>
    </Paper>
  )
}

export default withRouter(Favorite)
