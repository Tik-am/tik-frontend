import React from 'react'
import styled from 'styled-components'

export default {
  HeaderInputDiv: styled.div`
        width: ${({ width }) => width || ''};
        height: ${({ height }) => `${height}px` || 'auto'};
        border-radius: 27px;
        border: ${({ border }) => border || 'none'};
        display: flex;
        flex-direction: ${({ reverse }) => reverse ? 'row-reverse;' : 'row'};
        justify-content: flex-start;
        align-items: center;
        margin: ${({ margin }) => margin || '0'};
        @media (max-width: 900px) {
          width: ${({ reverse }) => reverse ? '90%' : ''};
          border-bottom: ${({ reverse }) => reverse ? '1px solid #757575;' : ''};
          border-radius: ${({ reverse }) => reverse ? '0' : '27px'};
          height: ${({ reverse }) => reverse ? 'auto' : ''};
          padding: ${({ reverse }) => reverse ? '5px' : ''};
          margin: ${({ reverse }) => reverse ? '5px 0 0 0' : ''};
        }
    `,
  Input: styled.input`
        width: 80%;
        height: 47px;
        outline: none;
        font-size: 16px;
        background: transparent;
        border: none;
        color: ${({ reverse }) => reverse ? '#757575;' : '#fff'};
   `,
  IconDiv: styled.div`
    margin:${({ reverse }) => reverse ? '0 25px 0 10px;' : '0 25px;'};
   `
}
