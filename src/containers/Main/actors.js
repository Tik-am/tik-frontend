import React, { useState } from 'react'
import {
    Paper,
    Carousel,
    Button,
    BackgroundImage
  } from '../../components';
  
  import ActorsData from './actorsData'

  import './style.scss'

  import { useTranslator } from '../../utils/translator';

const Actors = () => {
  const { t } = useTranslator();


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
                 responsive: [
                    {
                      breakpoint: 850,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                    ]
            }}>
                {actors}
            </Carousel>
            <Button text={t("ViewAll")} />
        </Paper>
    )
}

export default Actors
