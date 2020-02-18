import React, { useState } from 'react'
import {
    Paper,
    Carousel,
    ViewAll,
    BackgroundImage
  } from '../../components';
  
  import ActorsData from './actorsData'

  import './style.scss'


const Actors = () => {

    const actors = ActorsData.map((item) => (
        <BackgroundImage 
            width={319}
            height={355}
            src={item.src}
            opacity={0.31}
        />
    ))
    
    return (
        <Paper className='ActorsMain'>
            <Carousel settings={{
                 dots: true,
                 dotsClass: 'slick-dots',
                 infinite: true,
                 autoplay: true,
                 arrows: true,
                 speed: 100,
                 slidesToShow: actors && actors.length > 4 ? 4 : actors.length,
                 slidesToScroll: 1,
            }}>
                {actors}
            </Carousel>
            <ViewAll />
        </Paper>
    )
}

export default Actors