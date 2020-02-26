import React from 'react'
import styled from 'styled-components'

export default {
  Main: styled.div`
    height: 211px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:  50px 5px 5px 5px;
    `,
  Data: styled.div`
    width: 193px;
    height: 127px;
    border-radius: 20px;
    background-color: #341c4e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Time: styled.div`
    color: #fff;
    width: 193px;
    padding: 19px 0;
    border-radius: 20px;
    background-color: #341c4e;
    text-align: center;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
  `,
  Week: styled.div`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  `,
  Month: styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
   `
}
