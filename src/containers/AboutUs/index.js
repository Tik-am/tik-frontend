import React from 'react'

import './style.scss'

import {
  Paper,
  MainPageImg,
  BackgroundImage
} from '../../components'

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
          <BackgroundImage
            src={about2}
            width={'100%'}
            height={'610px'}
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

export default AboutUs
