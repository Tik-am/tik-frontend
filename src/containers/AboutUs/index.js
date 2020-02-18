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
  MainPageImg,
  Text
} from '../../components';

import {
  about,
  about2
} from '../../assets'

const AboutUs = () => {
  return (
    <>
      <section className="Main flexible vertical jCenter aCenter" >
        <MainPageImg
          src={about}
          height={868}
          gradient
        />
        <Paper className='flexible jCenter AboutUsMainText'>
          ABOUT US
        </Paper>
        <Paper className='flex AboutUsMainImage'>
          <Image
            src={about2}
            width={1214}
            height={610}
          />
        </Paper>
        <Paper className='flexible vertical AboutUsMainTexts'>
          <Paper className='flexible vertical AboutUsMainTextItem'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          </Paper>
          <Paper className='flexible vertical AboutUsMainTextItem'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
          </Paper>
        </Paper>
      </section>
    </>
  )
}

export default (withRouter(AboutUs));
