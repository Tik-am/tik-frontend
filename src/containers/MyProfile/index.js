import React, { useState, useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  Paper,
  BackgroundImage,
  Span,
  TextField,
  Button
} from '../../components'

import './style.scss'

import {
  oval
} from '../../assets'

import {
  withRouter,
  NavLink
} from 'react-router-dom'

import eventsData from '../../configs/eventsData'

import { useTranslator } from '../../utils/translator'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Paper
      className='MyProfileContent'
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </Paper>
  )
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const tickets = [
  'concert Bohemia - 5000 amd VIP section',
  'concert Camerayin - 5000 amd section',
  'concert Sundukyan - 5000 amd section',
  'cinema Star - 5000 amd VIP section',
  'cinema Moskva - 5000 amd VIP section'
]

const MyProfile = () => {
  const { t } = useTranslator()
  const [value, setValue] = React.useState(0)
  const [favoritesData, setFavoritesData] = useState(null)
  const [ticketData, setTicketData] = useState(null)

  useEffect(() => {
    setFavoritesData(null)
    setTimeout(() => {
      setFavoritesData(eventsData && eventsData.allEventDataForMainPages.Cinema)
      setTicketData(tickets)
    }, 500)
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <section className="Main flexible jBetween aCenter" >
      <Paper className='MyProfileContainer'>
        <Paper className='MyProfileSettingsContent'>
          <Paper className='MyProfileSettingsAvatarContent'>
            <Paper className='MyProfileSettingsAvatarMain'>
              <BackgroundImage
                width={'91.4px'}
                height={'91.4px'}
                borderRadius={'50%'}
                src={oval}
                margin='0'
              />
            </Paper>
            <Span>
            John Smith
            </Span>
            <Span>
            Bonus 45
            </Span>
          </Paper>
          <Paper className='MyProfileSettingsTabsMain'>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              className='MyProfileSettingsTabs'
            >
              <Tab label="Profile details" className={`MyProfileSettingsTabItem ${value === 0 ? 'active' : ''}`} {...a11yProps(0)} />
              <Tab label="Favorite" className={`MyProfileSettingsTabItem ${value === 1 ? 'active' : ''}`} {...a11yProps(1)} />
              <Tab label="History" className={`MyProfileSettingsTabItem ${value === 2 ? 'active' : ''}`} {...a11yProps(2)} />
            </Tabs>
          </Paper>
        </Paper>
        <TabPanel value={value} index={0}>
          <Paper className='MyProfileDetails'>
            <Paper className='MyProfileTitle'>
            My Profile
            </Paper>
            <Paper className='MyProfileProperties'>
              <Paper className='MyProfilePropertiesImg'>
                <Paper className='MyProfilePropertiesImage'>
                  <BackgroundImage
                    width={'150px'}
                    height={'150px'}
                    borderRadius={'50%'}
                    src={oval}
                    margin='0'
                  />

                </Paper>
                <Paper className='MyProfilePropertiesIcon'>
              Replace
                </Paper>

              </Paper>
              <Paper className='MyProfilePropertiesInfo'>
                <TextField
                  placeholder={t('_Name_')}
                  size="medium"
                />
                <TextField
                  placeholder={t('First Name')}
                  size="medium"
                />
                <TextField
                  placeholder={t('Last Name')}
                  size="medium"
                />
                <TextField
                  placeholder={t('_Email_')}
                  type='email'
                  size="medium"
                />
                <TextField
                  placeholder={t('_Phone_')}
                  type='number'
                  size="medium"
                />
                <Button
                  text='Save Changes'
                  color='#fff'
                  background='#04caa6'
                  borderRadius='27'
                  padding='13'
                />
              </Paper>
            </Paper>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper className='Events'>
            {favoritesData && favoritesData.map((item) => (
              <NavLink to={'/events/' + item.id} key={item.id.toString()}>
                <Paper
                  className='EventItem'
                  style={{
                    backgroundImage: `url(${item.src})`,
                    width: '230px',
                    height: '350px'
                  }}
                />
              </NavLink>
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paper className='History'>
            <Paper className='HistoryContent'>
              <Paper className='eventsHistory'>
                <Paper className='eventsHistoryTitle'>
                    My History
                </Paper>
                <Paper className='Events'>
                  {favoritesData && favoritesData.slice(0, 4).map((item) => (
                    <NavLink to={'/events/' + item.id} key={item.id.toString()}>
                      <Paper
                        className='EventItem'
                        style={{
                          backgroundImage: `url(${item.src})`,
                          width: '230px',
                          height: '350px'
                        }}
                      />
                    </NavLink>
                  ))}
                </Paper>
              </Paper>
              <Paper className='TicketHistory'>
                <Paper className='TicketHistoryTitle'>
                tikets
                </Paper>
                <Paper className='TicketHistories'>
                  {ticketData && ticketData.map((item) => (
                    <Paper className='ticketHistoryItem'>
                      {item}
                    </Paper>
                  ))}
                </Paper>
              </Paper>
            </Paper>
          </Paper>
        </TabPanel>
      </Paper>
    </section>
  )
}

export default withRouter(MyProfile)
