import React from 'react'

import Image from '../Image'
import Paper from '../Paper'
import Text from '../Text'

import './style.scss'

const LogoAndText = ({
  text,
  src,
  alt,
  width,
  height,
  color,
  size
}) => (
  <Paper flexName="flexible jBetween aCenter LogoAndText">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
    <Text
      color={color}
      size={size}
      text={text}
    />
  </Paper>
)

export default LogoAndText
