import React from 'react';

import Icons from './icon';

const Icon = ({
    name,
    width,
    height,
    fill,
    ...restProps
}) => {
    return(
      <span
         {...restProps}
      >
          {name ? Icons[name] && Icons[name](width,height,fill) : ""}
      </span>
    )
};

export  default Icon;
