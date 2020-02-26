import React, { useState, useEffect } from 'react'
import {
  Paper,
  Event,
  Carousel,
  Button
} from '../../components'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import { useTranslator } from '../../utils/translator'

import {
  EVENT_TYPES
} from '../../configs/types'

const Events = () => {
  const { t } = useTranslator()

  // const [hasError, setErrors] = useState(false)
  const [data, setData] = useState(null)
  const [eventType, setEventType] = useState('Theatre')
  const eventTypes = EVENT_TYPES.labels

  useEffect(() => {
    setTimeout(() => {
      setData(eventsData && eventsData.allEventDataForMainPages[eventType])
    }, 1000)
  }, [eventType])

  const eventTypeHandler = (item) => {
    if (item !== eventType) {
      setData(null)
      setEventType(item)
    }
  }

  return (
    <Paper className='EventsMain'>
      <Paper className='EventsTypes'>
        {eventTypes.map((item, index) => (
          <Paper
            key={index.toString()}
            className={`EventsTypeItem ${eventType === item ? 'active' : ''}`}
            onClick={() => eventTypeHandler(item)}
          >
            {t(`_${item}_`).toUpperCase()}
          </Paper>
        ))}
      </Paper>
      <Paper className='EventsTypesItems'>
        {data
          ? <Carousel settings={{
            dots: false,
            dotsClass: 'slick-dots',
            infinite: true,
            autoplay: true,
            arrows: false,
            speed: 100,
            slidesToShow: data && data.length > 4 ? 4 : data.length,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 850,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }}>
            {data.map((item) => (
              <NavLink to={'/events/' + item.id} key={item.id}>
                <Event
                  maxWidth={476}
                  height={718}
                  src={item.src}
                  alt={item.name}
                />
              </NavLink>
            ))}
          </Carousel>
          : <Paper className='Spinner' />
        }
      </Paper>
      <NavLink to={'/category/' + eventType.toLowerCase()}>
        <Button text={t('ViewAll')} />
      </NavLink>
    </Paper>
  )
}

export default withRouter(Events)
