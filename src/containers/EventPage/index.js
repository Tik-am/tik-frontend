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
  Span,
  RecentBuzz,
  TwoColorWords,
  Icon
} from '../../components'

import { useTranslator } from '../../utils/translator'

import './style.scss'

import Description from './description'

import eventsData from '../../configs/eventsData'
import TicketsList from './TicketsList'
import CriticsReviews from './CriticsReviews'
import CastAndCreatives from './CastAndCreatives'
// const { id } = useParams()

const EventPage = ({
  match
}) => {
  const { id } = match.params

  const [data, setData] = useState(null)
  const { t } = useTranslator()

  useEffect(() => {
    setTimeout(() => {
      setData(eventsData && eventsData.allDataForSingleEvent[id])
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  const media = data && data.media && data.media.map((item) => (
    <NavLink to={'#'} key={item.id.toString()}>
      <BackgroundImage
        width={'412px'}
        height={'292px'}
        src={item.src}
        opacity={0.31}
      />
    </NavLink>
  ))

  return (<section className={`Main flexible vertical jCenter aCenter ${data ? '' : 'fullPageHeight'}`} >
    {data
      ? (<>
        <MainPageImg
          src={data.posterImg}
          height={951}
          opacity='0.4'
          position='absolute'
          top={'0'}
        />
        <Description
          posterImg={data.posterImg}
          name={data.name}
          rating={data.rating}
          type={data.type}
          place={data.place}
          duration={data.duration}
          description={data.description}
          year={data.year}
        />
        <TicketsList
          data={data && data.tickets}
        />
        <Paper className='mediaCarousel'>
          <Paper className='mediaCarouselText'>
            {t('Video')} <Span>&</Span> {t('Photo')}
          </Paper>
          <MainCarousel
            data={media}
            slidesToShow={3}
          />
        </Paper>
        <Paper className='RecentBuzzContainer'>
          <TwoColorWords
            firstWord={t('Recent')}
            secondWord={t('Buzz')}
          />
          <Paper className='RecentBuzzMain'>
            {data.recentBuzz && data.recentBuzz.map((item) => (
              <RecentBuzz
                key={item.id.toString()}
                title={item.title}
                description={item.description}
                src={item.src}
                height={'auto'}
              />
            ))}
          </Paper>
        </Paper>
        {data.reviews && <Paper className='CriticsReviewsContainer'>
          <TwoColorWords
            firstWord={t('Critics') + "'"}
            secondWord={t('Reviews')}
          />
          <Paper className='CriticsReviewsMain'>
            <Paper className='CriticsReviewsMainIcon'>
              <Icon name='criticReviews' width={146} height={118}/>
            </Paper>
            <CriticsReviews
              data={data.reviews}
            />
          </Paper>
        </Paper>
        }
        {data.castAndCreatives && <CastAndCreatives
          data={data.castAndCreatives}
        />}
      </>)
      : <Paper className='Spinner' />
    }

  </section>)
}

export default withRouter(EventPage)
