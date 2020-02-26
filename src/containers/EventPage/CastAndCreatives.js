import React, { useState } from 'react'
import {
  Paper,
  Span,
  MainCarousel,
  BackgroundImage
} from '../../components'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import './style.scss'

import { useTranslator } from '../../utils/translator'

const CastAndCreatives = ({
  data
}) => {
  const { t } = useTranslator()

  const [eventType, setEventType] = useState('cast')
  const eventTypes = Object.keys(data)
  console.log('eventTypes:', eventTypes)

  const eventTypeHandler = (item) => {
    if (item !== eventType && eventTypes.includes(item)) {
      setEventType(item)
    }
  }

  const media = data && data[eventType] && data[eventType].map((item) => (
    <NavLink to={'/stars/' + item.id} key={item.id.toString()}>
      <BackgroundImage
        width={'318px'}
        height={'355px'}
        src={item.src}
      />
    </NavLink>
  ))

  return (
    <Paper className='CastAndCreativesContainer'>
      <Paper className='mediaCarouselText'>
        {t('Cast')} <Span>&</Span> {t('Creatives')}
      </Paper>
      <Paper className='EventsTypes'>
        {eventTypes.map((item, index) => (
          <Paper
            key={`${item}_${index}`}
            className={`EventsTypeItem ${eventType === item ? 'active' : ''}`}
            onClick={() => eventTypeHandler(item)}
          >
            {t(item).toUpperCase()}
          </Paper>
        ))}
      </Paper>
      {data && data[eventType] &&
      <Paper className='CastAndCreativesMain'>
        <MainCarousel
          data={media}
          slidesToShow={4}
          url='stars'
        />
      </Paper>
      }
    </Paper>
  )
}

export default withRouter(CastAndCreatives)
