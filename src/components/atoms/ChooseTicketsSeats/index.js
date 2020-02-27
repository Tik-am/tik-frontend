import React from 'react'
import {
  Paper
} from '../../'

import {
  Camerayin
} from '../../../assets'

import './style.scss'

const ChooseTicketsSeats = ({
  svg,
  data
}) => {
  return (
    <Paper className='ChooseSeatsContainer'>
      <Paper className='ChooseSeatsTitle'>Choose Seats</Paper>
      <Paper className='ChooseSeatsSeats' style={{
        backgroundImage: `url(${Camerayin})`
      }} />
    </Paper>
  )
}

export default ChooseTicketsSeats
