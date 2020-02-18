import React from 'react'
import styled from 'styled-components';

export default {
    Div: styled.div`
        background-image: url('${({src}) => src}');
        opacity: ${({opacity}) => opacity || 1};
        width: ${({width}) => width ? `${width}px` : `284px`};
        height: ${({height}) => height ? `${height}px` : `78px`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
   `
}
