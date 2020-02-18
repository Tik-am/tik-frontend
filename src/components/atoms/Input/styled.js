import React from 'react'
import styled from 'styled-components';

export default {
    HeaderInputDiv: styled.div`
        width: ${({width}) => `${width}px`|| `427px`};
        height: ${({height}) => `${height}px` || `47px`};
        border-radius: 27px;
        border: ${({border}) => border || `none`};
        display: flex;
        flex-direction: ${({reverse}) => reverse ? `row-reverse;` : `row`};
        justify-content: flex-start;
        align-items: center;
        margin: ${({margin}) => margin || `0`};
    `,
    Input: styled.input`
        width: 354px;
        height: 47px;
        outline: none;
        font-size: 16px;
        background: transparent;
        border: none;
   `,
   IconDiv: styled.div`
    margin:${({reverse}) => reverse ? `0 25px 0 10px;` : `0 25px;`};
   `
}
