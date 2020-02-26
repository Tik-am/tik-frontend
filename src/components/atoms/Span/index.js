import React, { forwardRef } from 'react'

const Span = forwardRef(({
  style,
  onClick,
  children,
  flexName,
  className,
  ...restProps
}, ref) => (
  <span
    className={className}
    onClick={onClick}
    style={style}
    ref={ref}
    {...restProps}
  >
    {children}
  </span>
))

Span.displayName = 'Span'

export default Span
