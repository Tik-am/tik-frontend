import React, { useEffect, useState } from 'react'
import {
  NavLink,
  withRouter
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import {
  Paper
} from '../../components'

const tickets = [
  'concert Bohemia - 5000 amd VIP section',
  'concert Camerayin - 5000 amd section',
  'concert Sundukyan - 5000 amd section',
  'cinema Star - 5000 amd VIP section',
  'cinema Moskva - 5000 amd VIP section'
]
const History = ({
  className
}) => {
  const [favoritesData, setFavoritesData] = useState(null)
  const [ticketData, setTicketData] = useState(null)

  useEffect(() => {
    setFavoritesData(null)
    setTimeout(() => {
      setFavoritesData(eventsData && eventsData.allEventDataForMainPages.Cinema)
      setTicketData(tickets)
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  return (
    <Paper className={`History flexible vertical wrap jStart ${className}`}>
      <Paper className='eventsHistory flexible vertical'>
        <Paper className='eventsHistoryTitle'>
            My History
        </Paper>
        <Paper className='Events flexible jBetween wrap'>
          {favoritesData && favoritesData.slice(0, 4).map((item) => (
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
      <Paper className='TicketHistory'>
        <Paper className='eventsHistoryTitle'>
            Tikets
        </Paper>
        <Paper className='TicketHistories'>
          {ticketData && ticketData.map((item) => (
            <Paper className='ticketHistoryItem'>
              {item}
            </Paper>
          ))}
        </Paper>
      </Paper>
    </Paper>
  )
}

export default withRouter(History)
