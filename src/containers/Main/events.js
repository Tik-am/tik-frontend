import React, { useState } from 'react'
import {
    Image,
    LogoAndText,
    Paper,
    Dropdown,
    FindTicket,
    Event,
    Carousel,
    Button
  } from '../../components';
  
  import {
    bitmapSmallPNG
  } from '../../assets'

  import EventData from './eventsData'
  import { useTranslator } from '../../utils/translator';



const Events = () => {
    const { t } = useTranslator();

    const [eventType, setEventType] = useState('Theatre')
    console.log('EventData:', EventData)
    console.log('eventType:', eventType)
    console.log('EventData[eventType]:', EventData[eventType])

    const eventTypeHandler = (item) => {
        setEventType(item)
    }

    const events = EventData[eventType].map((item) => (
        <Event 
            width={476}
            height={718}
            src={item.src}
            alt={item.name}
        />
    ))
    console.log('events:', events)
    
    return (
        <Paper className='EventsMain'>
            <Paper className='EventsTypes'>
                {Object.keys(EventData).map((item) => (
                    <Paper 
                        className={`EventsTypeItem ${eventType === item ? 'active' : ''}`}
                        onClick={() => eventTypeHandler(item)}
                    >
                        {t(`_${item}_`).toUpperCase()}
                    </Paper>
                ))}
            </Paper>
            <Carousel settings={{
                 dots: true,
                 dotsClass: 'slick-dots',
                 infinite: true,
                 autoplay: true,
                 arrows: false,
                 speed: 100,
                 slidesToShow: events && events.length > 4 ? 4 : events.length,
                 slidesToScroll: 1,
            }}>
                {events}
            </Carousel>
            <Button text={t("ViewAll")} />
        </Paper>
    )
}

export default Events
