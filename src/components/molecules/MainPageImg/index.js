import React from 'react'

import Styled from './styled'
import {
  FindTicket
} from '../../'

const MainPageImg = ({
  width,
  height,
  src,
  withSearch,
  gradient,
  opacity,
  position,
  top
}) => {
  return (
    <Styled.MainPageImg
      width={width}
      height={height}
      src={src}
      gradient={gradient}
      opacity={opacity}
      position={position}
      top={top}
    >
      {withSearch ? <FindTicket /> : null}
    </Styled.MainPageImg>
  )
}

export default MainPageImg
