import React from 'react'

import Styled from './styled'
import {
    FindTicket
} from '../../'

const MainPageImg = ({
    width, 
    height,
    src
}) => {
    console.log('width:', width)
    return (
       <Styled.MainPageImg
            width={width}
            height={height}
            src={src}
       >
           <FindTicket />
       </Styled.MainPageImg>
    )
}

export default MainPageImg