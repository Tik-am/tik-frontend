import React from 'react'
import { Paper, Image } from '../..'

import './style.scss'

const RecentBuzz = ({
  title,
  description,
  src,
  height
}) => {
  return (
    <Paper className='RecentBuzzItem'>
      <Paper className='RecentBuzzItemImg'>
        <Image
          width={'100%'}
          alt={title}
          src={src}
          height={height}
        />
      </Paper>
      <Paper className='RecentBuzzItemDesc'>
        <Paper className='RecentBuzzItemDescTitle'>
          {title}
        </Paper>
        <Paper className='RecentBuzzItemDescription'>
          {description}
        </Paper>
      </Paper>
    </Paper>
  )
}

export default RecentBuzz
