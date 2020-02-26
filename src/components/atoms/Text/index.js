import React from 'react'

import Styled from './styled'

const Text = ({
  color,
  size,
  text,
  onClick,
  style
}) => {
  return (
    <Styled.Span
      color={color}
      size={size}
      onClick={onClick}
      style={style}
    >
      {text}
    </Styled.Span>
  )
}

export default Text
