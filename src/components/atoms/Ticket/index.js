import React from 'react'
import moment from 'moment'

import Styled from './styled'

const Ticket = ({
  date
}) => {
  return (
    <Styled.Main>
      <Styled.Data >
        <Styled.Week>
          {moment(date).format('ddd').toUpperCase()}
        </Styled.Week>
        <Styled.Month>
          {moment(date).format('MMM D').toLowerCase()}
        </Styled.Month>
      </Styled.Data>
      <Styled.Time >
        {moment(date).format('HH:mm')}
      </Styled.Time>
    </Styled.Main>
  )
}

export default Ticket
