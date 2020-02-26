import React, { useState, useEffect } from 'react'

import {
  Paper,
  MainPageImg,
  TwoColorWords,
  FindTicket,
  Span
} from '../../components'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import StarData from '../../configs/starData'

import {
  home1
} from '../../assets'

import './style.scss'

import { useTranslator } from '../../utils/translator'

const Stars = () => {
  const { t } = useTranslator()

  const [data, setData] = useState(null)
  const [mainImg, setMainIMg] = useState(null)

  useEffect(() => {
    setData(null)
    setTimeout(() => {
      setData(StarData && StarData.allStars && Object.values(StarData.allStars))
      setMainIMg(home1)
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="Main flexible vertical jCenter aCenter" >
      {data
        ? <>
          <MainPageImg
            src={mainImg}
            height={951}
            opacity='0.4'
            position='absolute'
            top={'0'}
          />
          <FindTicket
            margin
          />
          <Paper className='StarsTitle'>
            <TwoColorWords
              firstWord={'OUR'}
              secondWord={'ACTORS'}
            />
          </Paper>
          <Paper className='Stars'>
            {data.map((item) => (
              <NavLink to={'/stars/' + item.id} key={item.id.toString()}>
                <Paper
                  className='StarsItem'
                  style={{
                    backgroundImage: `url(${item.posterImg})`
                  }}
                >
                  <Span className='StarsItemName'>
                    {`${item.name ? item.name[0].toUpperCase() + '.' : ''} ${item.surname || ''}`}
                  </Span>
                  <Span className='StarsItemPosition'>
                    {item.actor || ''}
                  </Span>
                </Paper>
              </NavLink>
            ))}
          </Paper>
        </>
        : <Paper className='Spinner' />
      }
    </section>
  )
}

export default withRouter(Stars)
