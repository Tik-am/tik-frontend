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
  home2
} from '../../assets'

const AboutUs = () => {
  return (
    <>
      {/* <section className="Main flexible vertical jCenter aCenter" >
        <MainPageImg
          src={home2}
          height={951}
        />
      </section> */}
    </>
  )
}

export default (withRouter(AboutUs));
