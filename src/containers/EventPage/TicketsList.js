import React from 'react'
import { Paper, Ticket, TwoColorWords } from '../../components'

import { useTranslator } from '../../utils/translator'

const TicketsList = ({
  data
}) => {
  const { t } = useTranslator()

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
            />
          ))}
        </Paper>
      </Paper>
    </Paper>
  )
}

export default TicketsList
