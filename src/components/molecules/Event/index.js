import React from 'react'

import {
  Paper
} from '../../'

import './style.scss'

const Event = ({
  height,
  src,
  maxWidth,
  onClick
}) => {
  return (
    <Paper
      onClick={onClick}
      className='EventBackgroundImg'
      style={{
        maxWidth: maxWidth,
        height: height,
        backgroundImage: `url(${src})`
      }}
    />
  )
}
export default Event
