import React, { useEffect, useRef } from 'react'
import {
  Paper,
  Ticket,
  TwoColorWords,
  Stepper,
  ChooseTicketsSeats,
  ChoosePayment
} from '../../components'
import Modal from '@material-ui/core/Modal'

import { useTranslator } from '../../utils/translator'

// import

const TicketsList = ({
  data
}) => {
  const { t } = useTranslator()

  const [open, setOpen] = React.useState(false)
  const [paymentData, setPaymentData] = React.useState([
    {
      seat: 4,
      raw: 3,
      price: 5000
    },
    {
      seat: 4,
      raw: 3,
      price: 5000
    }
  ])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const wrapperRef = useRef(null)

  function handleClickOutside (event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <Paper className='TicketsListContainer'>
      <Paper className='TicketsListMain'>
        <TwoColorWords
          firstWord={t('Frozen')}
          secondWord={t('Tickets')}
        />
        <Paper className='TicketsListContain'>
          {data && data.map((item, index) => (
            <Ticket
              key={`${item}_${index}`}
              date={item}
              onClick={handleOpen}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <Stepper onClose={handleClose} steps={[<ChooseTicketsSeats />, <ChoosePayment data={paymentData}/>]} ref={wrapperRef} tabIndex={-1}/>
          </Modal>
        </Paper>
      </Paper>
    </Paper>
  )
}

export default TicketsList
