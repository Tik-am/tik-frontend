import React from 'react'

import Styled from './styled'

const Image = ({
  src,
  alt,
  width,
  height,
  opacity
}) => (
  <Styled.Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    opacity={opacity}
  />
)

export default Image
