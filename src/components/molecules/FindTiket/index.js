import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import { useTranslator } from '../../../utils/translator';

import {
  Icon,
  Paper,
  Input,
  Dropdown,
  DataPicker
} from '../../';

import './style.scss';

const FindTicket = ({
}) => {
    const { t } = useTranslator();

    const ticketQuantity = [
         { label: 'One Ticket', value: '1'},
         { label: 'Two Tickets', value: '2'},
         { label: 'Tree Tickets', value: '3'},
         { label: 'Four Tickets', value: '4'},
         { label: 'Five Tickets', value: '5'},
         { label: 'Six Tickets', value: '6'},
         { label: 'Seven Tickets', value: '7'},
    ]

    const [activeTicketQuantity, setActiveTicketQuantity] = useState(ticketQuantity[1]);

    const handleActiveTicketQuantity = item => {
        setActiveTicketQuantity(item)
    }

  return (
    <Paper className='FindTicket flexible jCenter aCenter'>
        <Input 
            width={430}
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
        <Paper style={{width: '446px'}}>
            <DataPicker />
        </Paper>
        <button className='findTicketButton'>
            {t('_FindTickets_')}
        </button>
    </Paper>
  )
};

export default FindTicket;
