import React from 'react'
import styled from 'styled-components';

export default {
    Image: styled.img`
        alt: ${({alt}) => alt};
        src: ${({src}) => src};
        opacity: ${({opacity}) => opacity || 1};
        width: ${({width}) => width ? `${width}px` : `284px`};
        height: ${({height}) => height ? `${height}px` : `78px`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: '';
   `
}
