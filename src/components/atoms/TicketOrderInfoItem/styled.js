import styled from 'styled-components'

export default {
  Container: styled.div`
      display: flex;
      margin: 15px;
      justify-content: space-around;
      flex-wrap: wrap;
      `,
  Main: styled.div`
        display: flex;
        flex-direction: row;
        width: 260px;
        border-radius: 13px;
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
        margin: 5px 15px;
   `,
  Key: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 0;
        font-size: 18px;
        font-weight: bold;
        color: #565555;
        `,
  Value: styled.div`
        padding: 15px;
        border-left: solid 1px #dfdfdf;
        font-size: 18px;
        font-weight: bold;
        color: #565555;
        `,
  Icon: styled.div`
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: ${({ icon }) => icon ? `url(${icon})` : ''};
        width: 18px;
        height: 18px;
        margin: 0 15px;
   `,
  Span: styled.span`
  font-size: 12px;
  margin-right: 9px;
   `
}
