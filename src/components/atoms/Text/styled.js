import React from 'react'
import styled from 'styled-components';

export default {
    Span: styled.span`
        color: ${({color}) => color || '#000'};
        font-size: ${({size}) => size || `16px`};
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin: 0 10px;
   `
}