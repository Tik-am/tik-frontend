import React from 'react'
import styled from 'styled-components';

export default {
    Container: styled.div`
        display: flex;
        justify-content: center;
        margin: ${({margin}) => margin || `122px 0 0 0`};
   `,
   Button: styled.div`
        width: ${({width}) => width || `223px`};
        height: ${({height}) => height || `auto`};
        border-radius: ${({borderRadius}) => borderRadius ? `${borderRadius}px` : `50.5px`};
        border: ${({border}) => border || `solid 2px #fff`};
        color: ${({color}) => color || `#fff`};
        padding: ${({padding}) => padding ? `${padding}px` :`16px`};
        background: ${({background}) => background || `0`};
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        cursor: pointer;
   `
}
