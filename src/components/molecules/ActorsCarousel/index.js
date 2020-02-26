import React, { useState, useEffect } from 'react'
import {
  Paper,
  BackgroundImage,
  MainCarousel,
  TwoColorWords
} from '../../'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import ActorsData from '../../../configs/starData'

import './style.scss'

import { useTranslator } from '../../../utils/translator'

const Actors = () => {
  const { t } = useTranslator()

  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData(ActorsData && ActorsData.MainPage)
    }, 1000)
  }, [data])

  const actors = data && data.map((item) => (
    <NavLink to={'/stars/' + item.id} key={item.id}>
      <BackgroundImage
        key={item.name.toString()}
        width={'319px'}
        height={'355px'}
        src={item.src}
        opacity={0.31}
        withLink
      />
    </NavLink>
  ))

  return (
    <Paper className='ActorsMain'>
      <TwoColorWords
        firstWord={'OUR'}
        secondWord={'ACTORS'}
      />
      {data
        ? <MainCarousel
          data={actors}
          slidesToShow={4}
          url='stars'
        />
        : <Paper className='Spinner' />
      }
    </Paper>
  )
}

export default withRouter(Actors)
