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

import Favorite from './Favorite'
import History from './History'
import ProfileDetails from './ProfileDetails'

import { useTranslator } from '../../utils/translator'

const tickets = [
  'concert Bohemia - 5000 amd VIP section',
  'concert Camerayin - 5000 amd section',
  'concert Sundukyan - 5000 amd section',
  'cinema Star - 5000 amd VIP section',
  'cinema Moskva - 5000 amd VIP section'
]

const tabs = ['details', 'favorite', 'history']

const MyProfile = () => {
  const { t } = useTranslator()
  const [activeTab, setActiveTab] = useState('details')

  const handleActiveTabChange = (item) => {
    setActiveTab(item)
  }

  return (
    <section className="MyProfile flexible jBetween" >
      <aside >
        <Paper className='UserInfo flexible vertical jAround aCenter '>
          <Paper className='UserAvatar flexible jCenter aCenter'>
            <BackgroundImage
              width='90%'
              height='90%'
              borderRadius='50%'
              src={Bitman}
            />
            <Paper className='UserAvatarActive' />
          </Paper>
          <Span className='UserInfoText'>
          John Smith
          </Span>
          <Span className='UserInfoText'>
          Balance <Span>40.000 AMD</Span>
          </Span>
          <Span className='UserInfoText'>
          Bonus <Span>45</Span>
          </Span>
        </Paper>
        <Paper className='UserInfoList'/>
        <Paper className='UserTabs flexible aEnd vertical'>
          <Paper
            onClick={() => handleActiveTabChange('details')}
            className={`UserTabItem flexible jStart ${`${activeTab === 'details' ? 'active' : ''}`}`}>
            <Icon name='user' width={20} height={20}/>
            <Span className='UserTabItemText'>Profile details</Span>
          </Paper>
          <Paper
            onClick={() => handleActiveTabChange('favorite')}
            className={`UserTabItem flexible jStart ${`${activeTab === 'favorite' ? 'active' : ''}`}`}>
            <Icon name='heart' width={20} height={20}/>
            <Span className='UserTabItemText'>Favorite</Span>
          </Paper>
          <Paper
            onClick={() => handleActiveTabChange('history')}
            className={`UserTabItem flexible jStart ${`${activeTab === 'history' ? 'active' : ''}`}`}>
            <Icon name='history' width={20} height={20}/>
            <Span className='UserTabItemText'>History</Span>
          </Paper>
        </Paper>
      </aside>
      <Paper className='MyProfileContent flexible jCenter'>
        <ProfileDetails className={`${activeTab === 'details' ? 'active' : ''}`} />
        <Favorite className={`${activeTab === 'favorite' ? 'active' : ''}`} />
        <History className={`${activeTab === 'history' ? 'active' : ''}`} />
      </Paper>
    </section>
  )
}

export default withRouter(MyProfile)
