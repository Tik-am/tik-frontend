import React from 'react'

import './style.scss'

import {
  MainPageImg,
  Actors
} from '../../components'

import {
  home1
} from '../../assets'

import Events from './events'

const Main = () => {
  return (
    <section className="Main flexible vertical jCenter aCenter" >
      <MainPageImg
        src={home1}
        height={951}
        withSearch
      />
      <Events />
      <Actors />
    </section>
  )
}

export default Main
