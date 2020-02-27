import React from 'react'
import classnames from 'classnames'

import Icons from './icon'

const Icon = ({
  className,
  name,
  width,
  height,
  fill,
  ...restProps
}) => {
  return (
    <span
      className={classnames('Icon', className)}
      {...restProps}
    >
      {name ? Icons[name] && Icons[name](width, height, fill) : ''}
    </span>
  )
}

export default Icon
