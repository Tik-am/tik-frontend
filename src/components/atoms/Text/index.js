import React from 'react';

import Styled from './styled';

const Text = ({
  color,
  size,
  text
}) => {
  return(
    <Styled.Span
      color={color}
      size={size}
      >
      {text}
    </Styled.Span>
  )
};

export default Text;
