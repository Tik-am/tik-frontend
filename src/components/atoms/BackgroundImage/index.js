import React from 'react'

import Styled from './styled'

const BackgroundImage = ({
  src,
  width,
  height,
  opacity,
  borderRadius
}) => (
  <Styled.Div
    src={src}
    width={width}
    height={height}
    opacity={opacity}
    borderRadius={borderRadius}
  >
  </Styled.Div>

)

export default BackgroundImage
