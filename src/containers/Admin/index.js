import React, { useState, useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  Paper,
  BackgroundImage,
  Span,
  TextField,
  Button,
  Icon
} from '../../components'

import './style.scss'

import {
  Bitman
} from '../../assets'

import {
  withRouter,
  NavLink
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import Events from './Events'
// import History from './Actors'
// import ProfileDetails from './Places'

import { useTranslator } from '../../utils/translator'

const tabs = ['events', 'actors', 'places', 'seats', 'accountant', 'users', 'stats', 'homePage', 'contactUs', 'aboutUs']

const Admin = () => {
  const { t } = useTranslator()
  const [activeTab, setActiveTab] = useState('events')

  const handleActiveTabChange = (item) => {
    setActiveTab(item)
  }

  return (
    <section className="MyProfile flexible jBetween" >
      <aside >
        <Paper className='AdminTabs flexible aEnd vertical'>
          {tabs && tabs.map((item) => (
            <Paper
              onClick={() => handleActiveTabChange(item)}
              className={`UserTabItem flexible jStart ${`${activeTab === item ? 'active' : ''}`}`}>
              <Icon name={item} width={20} height={20}/>
              <Span className='AdminTabItemText'>{item}</Span>
            </Paper>
          ))}
        </Paper>
      </aside>
      <Paper className='AdminContent flexible jCenter '>
        <Events className={`${activeTab === 'events' ? 'active' : ''}`} />
        {/* <Actors className={`${activeTab === 'actors' ? 'active' : ''}`} />
        <Places className={`${activeTab === 'places' ? 'active' : ''}`} />
        <Seats className={`${activeTab === 'seats' ? 'active' : ''}`} />
        <Accountant className={`${activeTab === 'accountant' ? 'active' : ''}`} />
        <Users className={`${activeTab === 'users' ? 'active' : ''}`} />
        <Stats className={`${activeTab === 'stats' ? 'active' : ''}`} />
        <HomePage className={`${activeTab === 'homePage' ? 'active' : ''}`} />
        <ContactUs className={`${activeTab === 'contactUs' ? 'active' : ''}`} />
        <AboutUs className={`${activeTab === 'aboutUs' ? 'active' : ''}`} /> */}
      </Paper>
    </section>
  )
}

export default withRouter(Admin)
