import React from 'react'

import Styled from './styled'
import Icon from '../Icon'

const Input = ({
  width,
  height,
  reverse,
  placeholder,
  fill,
  margin,
  border
}) => (
  <Styled.HeaderInputDiv
    width={width}
    height={height}
    reverse={reverse}
    margin={margin}
    border={border}
  >
    <Styled.IconDiv>
      <Icon name='search' fill={fill}/>
    </Styled.IconDiv>
    <Styled.Input
      placeholder={placeholder}
      reverse={reverse}
    />
  </Styled.HeaderInputDiv>
)

export default Input
