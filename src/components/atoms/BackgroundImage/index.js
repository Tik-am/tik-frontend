import React from 'react'

import Styled from './styled'

const BackgroundImage = ({
  src,
  width,
  height,
  opacity
}) => (
  <Styled.Div
    src={src}
    width={width}
    height={height}
    opacity={opacity}
  >
  </Styled.Div>

)

export default BackgroundImage
