import React from 'react'
import {
  Carousel,
  Paper,
  Button
} from '../../'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import { useTranslator } from '../../../utils/translator'

import './style.scss'

const MainCarousel = ({
  data,
  slidesToShow,
  url
}) => {
  const { t } = useTranslator()
  return (
    <Paper className='SliderContainer'>
      <Carousel settings={{
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        autoplay: false,
        className: data && data.length < 4 ? '' : 'center',
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        speed: 100,
        slidesToShow: data && data.length >= 4 ? slidesToShow || 4 : data.length,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: slidesToShow && 3,
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
      }}
      >
        {data}
      </Carousel>
      {url &&
      <NavLink to={'/' + url}>
        <Button text={t('ViewAll')}/>
      </NavLink>
      }
    </Paper>
  )
}

export default withRouter(MainCarousel)
