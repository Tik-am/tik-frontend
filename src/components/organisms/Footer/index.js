import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import {
  Paper,
  Icon
} from '../../'

import './style.scss'

import { useTranslator } from '../../../utils/translator'

const Footer = () => {
  const { t } = useTranslator()

  return (
    <footer className={classnames('Footer')}>
      <Paper className="page-content">
        <Paper flexName="flexible jCenter" className="textStart">
            FOLLOW US
        </Paper>
        <Paper flexName="flexible jCenter" className="page-block">
          <ul>
            <li><NavLink to="/about-us">{t('_AboutUs_')}</NavLink></li>
            <li><NavLink to="/contact-us">{t('_ContactUs_')}</NavLink></li>
            <li><NavLink to="/">{t('_VisitUs_')}</NavLink></li>
            <li><NavLink to="/]">{t('_News_')}</NavLink></li>
            <li><NavLink to="/]">{t('_Gallery_')}</NavLink></li>
          </ul>
        </Paper>
        <Paper flexName="flexible aCenter jCenter" className="social-block">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="facebook" width={23} height={23}
              style={{
                marginRight: '15px'
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="instagram" width={23} height={23}
              style={{
                marginLeft: '15px'
              }}/>
          </a>
        </Paper>
        <Paper flexName="flexible vertical aCenter" style={{ marginBottom: '20px' }}>
          <Paper className="Footer_text">
                Aragatsotn Region, Armenia Sasunik Village
          </Paper>
          <Paper className="Footer_text">
                +374 95 48 48 48 Paruyr sevak 1/5
          </Paper>
          <Paper className="Footer_text">
                info@tik.am
          </Paper>
        </Paper>
      </Paper>
    </footer>
  )
}

export default connect()(Footer)
