import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import {
  Paper
} from '../../components'

const CriticsReviews = ({
  data
}) => {
  const [navImage, setNavImage] = useState(null)
  const [navInfo, setNavInfo] = useState(null)
  let slider1 = null
  let slider2 = null

  const images = data && data.map((item) => (
    <Paper className='CriticsReviewsItemImgContent' key={item.name.toString()}>
      <Paper
        className='CriticsReviewsItemImg'
        style={{
          backgroundImage: `url(${item.src})`
        }}
      />
    </Paper>
  ))

  const infos = data && data.map((item) => (
    <Paper className='CriticsReviewsInfoItem' key={item.id.toString()}>
      <Paper className='CriticsReviewsInfoName'>
        {item.name}
      </Paper>
      <Paper className='CriticsReviewsInfoPosition'>
        {item.position}
      </Paper>
      <Paper className='CriticsReviewsInfoReview'>
        {item.review}
      </Paper>
    </Paper>
  ))

  useEffect(() => {
    setNavImage(slider1)
    setNavInfo(slider2)
  }, [])

  return (
    <Paper className='CriticsReviewsItem'>
      <Slider
        asNavFor={navInfo}
        ref={slider => (slider1 = slider)}
        arrows={false}
        dots={false}
        infinite={true}
        autoplay={true}
        arrows={false}
        speed={100}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
      >
        {images}
      </Slider>
      <Slider
        className='valod'
        asNavFor={navImage}
        ref={slider => (slider2 = slider)}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        dots={true}
        infinite={true}
        autoplay={true}
        arrows={false}
        speed={100}
        slidesToShow={1}
        slidesToScroll={1}
        swipeToSlide={true}
        dotsClass='slick-dots'
      >
        {infos}
      </Slider>
    </Paper>
  )
}

export default CriticsReviews
