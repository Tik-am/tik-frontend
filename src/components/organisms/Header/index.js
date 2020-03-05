import React, { useState, useEffect, useRef } from 'react'
import Modal from '@material-ui/core/Modal'

import {
  NavLink,
  withRouter
} from 'react-router-dom'
import classnames from 'classnames'

import {
  Image,
  LogoAndText,
  Input,
  Paper,
  Dropdown,
  Icon
} from '../../'

import './style.scss'

import {
  SmallLogo,
  gifCardLogo,
  calendarSmallLogo,
  phoneSmallLogo,
  gifCardBlackLogo,
  calendarSmallBlackLogo,
  mainLogoBalck
} from '../../../assets'

import UserDropdown from './userDropdown'
import Login from './login-singup'

import { useTranslator } from '../../../utils/translator'

const Header = ({
  history: { push },
  location
}) => {
  const { t, setLanguage } = useTranslator()
  let isHeaderDark = false

  if (location.pathname.indexOf('my-profile') >= 0 || location.pathname.indexOf('admin') >= 0) {
    isHeaderDark = true
  }
  const languages = [
    { label: 'EN', value: 'en' },
    { label: 'AM', value: 'am' },
    { label: 'RU', value: 'ru' }
  ]

  const [active, setActive] = useState(false)
  const [activeLang, setActiveLang] = useState(languages[0])
  const [isAuth, setIsAuth] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleActiveLang = item => {
    setActiveLang(item)
    setLanguage(item.value)
  }

  const handleUserLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setIsAuth(true)
      setLoading(false)
    }, 500)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const wrapperRef = useRef(null)

  function handleClickOutside (event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const guestDropdown = () => (
    <Paper flexName="flexible aCenter jCenter userLogo " onClick={handleOpen} >
      <Paper className='flexible jCenter aCenter userLogoIcon'>
        <Icon name='user' width={40} height={40} fill={isHeaderDark ? '#000' : '#fff'}/>
      </Paper>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        {loading ? <Paper className='Spinner'/> : <Login ref={wrapperRef} onClick={handleUserLogin}/> }
      </Modal>
    </Paper>
  )

  return (
    <header className={classnames({ active: active })}>
      <nav className="flexible jCenter">
        <Paper flexName="flexible jBetween aCenter" className='page-content'>
          <NavLink to="/">
            <Image
              src={isHeaderDark ? mainLogoBalck : SmallLogo}
              alt='Logo'
              width={'133px'}
              height={'43.8px'}
            />
          </NavLink>
          <LogoAndText
            text='Gift Cards'
            width={'22px'}
            height={'19px'}
            color={isHeaderDark ? '#000' : '#fff'}
            size={16}
            src={isHeaderDark ? gifCardBlackLogo : gifCardLogo}
          />
          <LogoAndText
            text='Tickets by Date'
            width={'18px'}
            height={'18px'}
            color={isHeaderDark ? '#000' : '#fff'}
            size={16}
            src={isHeaderDark ? calendarSmallBlackLogo : calendarSmallLogo}
          />
          <LogoAndText
            text='+37494000000'
            width={'12px'}
            height={'20px'}
            color={isHeaderDark ? '#000' : '#fff'}
            size={16}
            src={phoneSmallLogo}
          />
          <Paper className='HeaderSearchBarSimple'>
            <Input
              placeholder='Search'
              border={isHeaderDark ? 'solid 1px #000' : 'solid 1px white'}
              fill={isHeaderDark ? '#000' : '#fff'}
            />
          </Paper>
          <Paper className='HeaderSearchContainer'>
            <Paper className='HeaderSearchContainerIcon'>
              <Icon name='search' width={30} height={30} fill={isHeaderDark ? '#000' : '#fff'}/>
            </Paper>
          </Paper>
          <Paper className='avatar'>
            {isAuth ? <UserDropdown color={isHeaderDark ? '#000' : '#fff'}/> : guestDropdown() }
          </Paper>

          <Paper className="languages">
            <Dropdown
              data={languages}
              selected={activeLang}
              onChange={handleActiveLang}
              color={isHeaderDark ? '#000' : '#fff'}
            />
          </Paper>
          <Paper
            className="menu-wrapper"
            onClick={() => setActive(!active)}
          >
            <Paper
              className={`hamburger-menu ${active ? 'animate' : ''} ${isHeaderDark ? 'dark' : ''}`}
            >
            </Paper>
          </Paper>
        </Paper>
        <Paper
          flexName="flexible aCenter jCenter animated bounceInDown"
          className={`headerList ${active ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink
                to="/about-us"
                onClick={() => setActive(!active)}
              >
                {t('_AboutUs_')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                onClick={() => setActive(!active)}
              >
                {t('_ContactUs_')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/theatre"
                onClick={() => setActive(!active)}
              >
                {t('_Theatre_')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/cinema"
                onClick={() => setActive(!active)}
              >
                {t('_Cinema_')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/concert"
                onClick={() => setActive(!active)}
              >
                {t('_Concert_')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/more"
                onClick={() => setActive(!active)}
              >
                {t('_More_')}
              </NavLink>
            </li>
          </ul>
        </Paper>
      </nav>
    </header>
  )
}

export default withRouter(Header)
