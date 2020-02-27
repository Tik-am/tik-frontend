import React from 'react'
import {
  Paper
} from '../../'

import Styled from './styled'

const TicketOrderInfoItem = ({
  icon,
  seat,
  raw,
  price
}) => {
  return (
    <Styled.Container>
      <Styled.Main >
        <Styled.Key>
          <Styled.Icon icon={icon} />
          Seat
        </Styled.Key>
        <Styled.Value>
          {seat}
        </Styled.Value>
      </Styled.Main>
      <Styled.Main >
        <Styled.Key>
          <Styled.Icon icon={icon} />
          Raw
        </Styled.Key>
        <Styled.Value>
          {raw}
        </Styled.Value>
      </Styled.Main>
      <Styled.Main >
        <Styled.Key>
          <Styled.Icon icon={icon} />
          Price
        </Styled.Key>
        <Styled.Value>
          <Styled.Span>AMD</Styled.Span>{price}
        </Styled.Value>
      </Styled.Main>
    </Styled.Container>
  )
}

export default TicketOrderInfoItem
