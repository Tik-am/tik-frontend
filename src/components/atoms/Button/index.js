import React from 'react'

import Styled from './styled'

const Button = ({
  onClick,
  text,
  margin,
  width,
  height,
  borderRadius,
  border,
  color,
  padding,
  background
}) => {
  return (
    <Styled.Container
      margin={margin}
    >
      <Styled.Button
        onClick={onClick}
        width={width}
        height={height}
        borderRadius={borderRadius}
        border={border}
        color={color}
        padding={padding}
        background={background}
      >
        {text}
      </Styled.Button>
    </Styled.Container>
  )
}

export default Button
