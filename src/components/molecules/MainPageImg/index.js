import React from 'react'

import Styled from './styled'
import {
    FindTicket
} from '../../'

const MainPageImg = ({
    width, 
    height,
    src,
    withSearch,
    gradient
}) => {
    console.log('width:', width)
    return (
       <Styled.MainPageImg
            width={width}
            height={height}
            src={src}
            gradient={gradient}
       >
           {withSearch ?  <FindTicket /> : null}
       </Styled.MainPageImg>
    )
}

export default MainPageImg