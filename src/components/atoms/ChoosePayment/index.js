import React from 'react'
import {
  Paper,
  TicketOrderInfoItem,
  BackgroundImage
} from '../../'

import {
  SeatIcon,
  arca,
  cash,
  delivery,
  masterCard,
  visa
} from '../../../assets'

import './style.scss'

const ChoosePayment = ({
  data
}) => {
  return (
    <Paper className='ChoosePaymentContainer' >
      <Paper className='ChoosePaymentTitle'>Payment Method</Paper>
      <Paper className='ChoosePaymentDesc'>Delivery is free. Payment is due on delivery.</Paper>
      <Paper className='ChoosePaymentItems'>
        {data && data.map((item, index) => (
          <TicketOrderInfoItem
            key={item.seat + item.raw + index}
            icon={SeatIcon}
            seat={item.seat}
            raw={item.raw}
            price={item.price}
          />
        ))}
      </Paper>
      <Paper className='PaymentTypes'>
        <Paper className='PaymentTypesItem'>
          <Paper className='PaymentText'>Cash register</Paper>
          <BackgroundImage
            width={'50px'}
            height={'50px'}
            src={cash} />
        </Paper>
        <Paper className='PaymentTypesItem'>
          <Paper className='PaymentText'>Card payment</Paper>
          <Paper className='PaymentCards'>
            <BackgroundImage
              width={'65px'}
              height={'42px'}
              src={visa} />
            <BackgroundImage
              width={'65px'}
              height={'42px'}
              src={arca} />
            <BackgroundImage
              width={'65px'}
              height={'42px'}
              src={masterCard} />
          </Paper>
        </Paper>
        <Paper className='PaymentTypesItem'>
          <Paper className='PaymentText'>delivery tiket</Paper>
          <BackgroundImage
            width={'60px'}
            height={'41px'}
            src={delivery} />
        </Paper>
      </Paper>
    </Paper>
  )
}

export default ChoosePayment
