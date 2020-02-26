import React, { useState, useEffect } from 'react'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import {
  MainPageImg,
  Paper,
  MainCarousel,
  BackgroundImage,
  TwoColorWords,
  FindTicket,
  Actors
} from '../../components'

import './style.scss'

import StarData from '../../configs/starData'

const StarPage = ({
  match
}) => {
  const { id } = match.params

  const [data, setData] = useState(null)

  useEffect(() => {
    setData(null)
    setTimeout(() => {
      setData(StarData && StarData.allStars[id])
    }, 1000)
    window.scrollTo(0, 0)
  }, [id])

  const events = data && data.events && data.events.map((item) => (
    <NavLink to={'/events/' + item.id} key={item.id}>
      <BackgroundImage
        width={'412px'}
        height={'292px'}
        src={item.mainImg}
        key={item.name}
        opacity={0.31}
      />
    </NavLink>
  ))

  return (<section className={`Main flexible vertical jCenter aCenter ${data ? '' : 'fullPageHeight'}`} >
    {data
      ? (<>
        <MainPageImg
          src={data.mainImg}
          height={951}
          opacity='0.4'
          position='absolute'
          top={'0'}
        />
        <FindTicket
          margin
        />
        <Paper className='StarContainer'>
          <Paper className='StarMain'>
            <Paper
              className='StarMainImg'
              style={{
                backgroundImage: `url(${data.posterImg})`
              }}
            />
            <Paper className='StarMainInfo'>
              <TwoColorWords
                firstWord={data.name}
                secondWord={data.surname}
              />
              <Paper className='StarMainInfoDescription'>
                {data.description}
              </Paper>
            </Paper>
          </Paper>
          <Paper className='StarEvents'>
            <MainCarousel
              data={events}
              slidesToShow={3}
              url='category/theatre'
            />
          </Paper>
          <Actors />
        </Paper>
      </>)
      : <Paper className='Spinner' />
    }

  </section>)
}

export default withRouter(StarPage)
