import React, { useEffect, useState } from 'react'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import {
  Paper
} from '../../components'

import {
  Table
} from './AdminComponents'

import './Events.scss'

const Favorite = ({
  className
}) => {
  const [rows, setRows] = useState(null)

  const headCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Id' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
    { id: 'place', numeric: true, disablePadding: false, label: 'Place' },
    { id: 'type', numeric: true, disablePadding: false, label: 'Type' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Status' }
  ]
  function createData ({ id, name, place, type, status }) {
    return { id, name, place, type, status }
  }

  // const rows = [
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Donut', 452, 25.0, 51, 4.9),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  //   createData('Honeycomb', 408, 3.2, 87, 6.5),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
  //   createData('KitKat', 518, 26.0, 65, 7.0),
  //   createData('Lollipop', 392, 0.2, 98, 0.0),
  //   createData('Marshmallow', 318, 0, 81, 2.0),
  //   createData('Nougat', 360, 19.0, 9, 37.0),
  //   createData('Oreo', 437, 18.0, 63, 4.0)
  // ]

  useEffect(() => {
    setRows(null)
    setTimeout(() => {
      const events = eventsData && Object.values(eventsData.allDataForSingleEvent)
      if (events) {
        events.map(createData)
        setRows(events.map(createData))
      }
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  console.log('rows::', rows)
  return (
    <Paper className={`Events flexible jCenter wrap vertical ${className}`}>
      {rows
        ? <>
          <Paper className='EventsTitle'>Events</Paper>
          <Paper className='flexible jBetween wrap '>
            <Table
              rows={rows}
              headCells={headCells}
            />
          </Paper>
        </> : <Paper className="Spinner"/>}

    </Paper>
  )
}

export default withRouter(Favorite)
