import React, { useState } from 'react'

import { useTranslator } from '../../../utils/translator'

import {
  Paper,
  Input,
  Dropdown,
  DataPicker,
  Button
} from '../../'

import './style.scss'

const FindTicket = ({
  margin
}) => {
  const { t } = useTranslator()

  const ticketQuantity = [
    { label: 'One Ticket', value: '1' },
    { label: 'Two Tickets', value: '2' },
    { label: 'Tree Tickets', value: '3' },
    { label: 'Four Tickets', value: '4' },
    { label: 'Five Tickets', value: '5' },
    { label: 'Six Tickets', value: '6' },
    { label: 'Seven Tickets', value: '7' }
  ]

  const [activeTicketQuantity, setActiveTicketQuantity] = useState(ticketQuantity[1])

  const handleActiveTicketQuantity = item => {
    setActiveTicketQuantity(item)
  }

  return (
    <Paper className={`FindTicket flexible jCenter aCenter ${margin ? 'FindTicketMargin' : ''}`}>
      <Input
        height={71}
        reverse
        placeholder='All Shows'
        fill='#000'
        margin='0 0 0 31px'
      />
      <Paper className='FindTicketDropdown' >
        <Dropdown
          data={ticketQuantity}
          selected={activeTicketQuantity}
          onChange={handleActiveTicketQuantity}
        />
      </Paper>
      <Paper className='FindTicketDataPicker'>
        <DataPicker />
      </Paper>
      <Button
        width={'205px'}
        height={'71px'}
        borderRadius='0 35.5px 35.5px 0'
        background='linear-gradient(105deg, #44ccff -100%, #00caa0 94%)'
        text={t('_FindTickets_')}
        padding={'22'}
        margin='10px 0;'
        border='none'
      />
    </Paper>
  )
}

export default FindTicket
