import React from 'react'

import {
  Paper,
  Span
} from '../../'

import './style.scss'

const TwoColorWords = ({
  firstWord,
  secondWord
}) => {
  return (
    <Paper className='TwoColorWords'>
      {firstWord} <Span >{secondWord}</Span>
    </Paper>
  )
}

export default TwoColorWords
