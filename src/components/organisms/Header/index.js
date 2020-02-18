import React, { useState, useEffect } from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import classnames from 'classnames'


import {
  Image,
  LogoAndText,
  Input,
  Paper,
  Dropdown,
  Button
} from '../../';

import './style.scss'

import {
  SmallLogo,
  gifCardLogo,
  calendarSmallLogo,
  phoneSmallLogo
} from '../../../assets';


import { useTranslator } from '../../../utils/translator';

const Header = ({
  history: { push },
  location,
}) => {

  const { t, setLanguage } = useTranslator();

  const languages = [
    { label: 'EN', value: 'en' },
    { label: 'AM', value: 'am' },
    { label: 'RU', value: 'ru' },
  ];

  const companyPages = [
    { label: '_Company_', value: '/' },
    { label: '_AboutUs_', value: '/about-us' },
    { label: '_ContactUs_', value: '/contact-us' },
    { label: '_Carrers_', value: '/careers' },
  ];

  const [active, setActive] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const [activePage, setActivePage] = useState(companyPages[0]);

  useEffect(() => {
    const selectedPage = companyPages.find(item => item.value.includes(location.pathname.split('/')[1]));
    setActivePage(selectedPage || companyPages[0]);
  }, [location.pathname]);

  const handleActiveLang = item => {
    setActiveLang(item);
    setLanguage(item.value);
  };

  const handleActivePage = item => {
    setActivePage(item);
    push(item.value);
    setActive(!active);
  };


  return (
    <header className={classnames({ 'active': active })}>
      <nav className="flexible aCenter">
        <Paper flexName="flexible jBetween aCenter grow" className="page-content">
          <Image
              src={SmallLogo}
              alt='Logo'
              width={133}
              height={43.8}
            />
          <LogoAndText 
            text='Gift Cards'
            width={22}
            height={19}
            color='#fff'
            size={16}
            src={gifCardLogo}
          />
          <LogoAndText 
            text='Tickets by Date'
            width={18}
            height={18}
            color='#fff'
            size={16}
            src={calendarSmallLogo}
          />
          <LogoAndText 
            text='+37494000000'
            width={12}
            height={20}
            color='#fff'
            size={16}
            src={phoneSmallLogo}
          />
          <Input 
            placeholder='Search'
            border='solid 1px white'
          />
          {/* <input type='avatar' /> */}

          <Paper className="languages">
              <Dropdown
                data={languages}
                selected={activeLang}
                onChange={handleActiveLang}
              />
            </Paper>
          <Paper className="menu-wrapper" onClick={() => setActive(!active)}>
            <Paper className={`hamburger-menu ${active ? 'animate' : ''}`}></Paper>
          </Paper>
        </Paper>
        <Paper flexName="flexible aCenter jCenter animated bounceInDown" className={`headerList ${active ? 'active' : ''}`}>
              <ul className="nav-list">
                <li>
                  <NavLink
                    to="/"
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
                    to="/"
                    onClick={() => setActive(!active)}
                  >
                    {t('_Theatre_')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setActive(!active)}
                  >
                    {t('_Cinema_')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setActive(!active)}
                  >
                    {t('_All_')}
                  </NavLink>
                </li>
              </ul>
          </Paper>
      </nav>
    </header>
  )
};

export default withRouter(Header);