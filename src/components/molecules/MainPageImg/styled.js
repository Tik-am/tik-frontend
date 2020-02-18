import React from 'react'
import styled from 'styled-components';

export default {
    MainPageImg: styled.div`
        width: ${({width}) => width ? `${width}px` : `100%;`};
        height: ${({height}) => height ? `${height}px` : `1087px`};
        display: flex;
        justify-content: center;
        align-content: center;
        align-item: center;
        background-image: url(${({src}) => src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
   `
}
