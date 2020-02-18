import React from 'react';
import { connect } from 'react-redux';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';

import './style.scss'

import {
  Image,
  LogoAndText,
  Paper,
  Dropdown,
  FindTicket,
  Event,
  MainPageImg
} from '../../components';

import {
  home1
} from '../../assets'

import Events from './events'
import Actors from './actors'

import {
  bitmapSmallPNG
} from '../../assets'

const Main = () => {
  return (
    <>
      <section className="Main flexible vertical jCenter aCenter" >
        <MainPageImg
          src={home1}
          height={951}
        />
          <Events />
          <Actors />
      </section>
    </>
  )
}

export default connect()(withRouter(Main));
