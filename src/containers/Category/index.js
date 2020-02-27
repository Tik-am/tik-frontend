import React, { useState, useEffect } from 'react'

import {
  Paper,
  MainPageImg
} from '../../components'

import {
  withRouter,
  NavLink,
  Redirect
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import {
  vache,
  terrorPNG,
  hamerg2,
  cirk
} from '../../assets'

import {
  EVENT_TYPES
} from '../../configs/types'

import './style.scss'

import { useTranslator } from '../../utils/translator'

const Category = ({
  match
}) => {
  const { t } = useTranslator()

  const { type } = match.params
  const [data, setData] = useState(null)
  const [mainImg, setMainIMg] = useState(null)
  const paramsTypes = EVENT_TYPES.URL
  const labelsTypes = EVENT_TYPES.labels
  const types = EVENT_TYPES.types
  const imageData = {
    cinema: terrorPNG,
    theatre: vache,
    concert: hamerg2,
    more: cirk,
    all: terrorPNG
  }

  useEffect(() => {
    setData(null)
    setTimeout(() => {
      console.log('data:::', data)
      console.log('eventsData.allEventDataForMainPages[types[type]]::', eventsData.allEventDataForMainPages[types[type]])
      setData(eventsData && eventsData.allEventDataForMainPages[types[type]])
      setMainIMg(imageData[type])
    }, 500)
    window.scrollTo(0, 0)
  }, [type])

  //   const eventTypeHandler = (item) => {
  //     if (item !== labelsTypes && labelsTypes.includes(item)) {
  //       setEventType(item)
  //     }
  //   }

  const CategoryPage = () => (
    <>
      <MainPageImg
        src={mainImg}
        height={951}
        opacity='0.4'
        position='absolute'
        top={'0'}
      />
      <Paper className='EventsTypeTitle'>
        {t(`_${types[type]}_`).toUpperCase()}
      </Paper>
      <Paper className='EventsTypes'>
        {labelsTypes.map((item, index) => (
          <NavLink to={'/category/' + item.toLowerCase()} key={index.toString()}>
            <Paper
              className={`EventsTypeItem ${type === item.toLowerCase() ? 'active' : ''}`}
            >
              {t(`_${item}_`).toUpperCase()}
            </Paper>
          </NavLink>
        ))}
      </Paper>
      <Paper className='Events'>
        {data && data.map((item) => (
          <NavLink to={'/events/' + item.id} key={item.id.toString()}>
            <Paper
              className='EventItem'
              style={{
                backgroundImage: `url(${item.src})`
              }}
            />
          </NavLink>
        ))}
      </Paper>
    </>
  )

  return (
    <section className="Main flexible vertical jCenter aCenter" >
      {data
        ? (!paramsTypes.includes(type) ? <Redirect to='/category/all'/> : <CategoryPage />)
        : <Paper className='Spinner' />
      }
    </section>
  )
}

export default withRouter(Category)
