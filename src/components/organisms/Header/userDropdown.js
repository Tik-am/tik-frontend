import React, { useState, useEffect, useRef } from 'react'
import {
  NavLink,
  withRouter
} from 'react-router-dom'

import './style.scss'

import {
  Paper,
  Icon,
  Span,
  DropdownLink
} from '../../'

import { useTranslator } from '../../../utils/translator'

const UserDropdown = ({
  color
}) => {
  const { t } = useTranslator()

  const wrapperRef = useRef(null)
  const [active, setActive] = useState(false)

  function handleClickOutside (event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      if (!(window.innerWidth < 900)) {
        setActive(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const userProfileData = [
    {
      label: 'Profile Details',
      url: '/my-profile'
    }
  ]

  return (
    <Paper
      className='flexible vertical userDropdownIcon'
      ref={wrapperRef}
      onClick={() => setActive(!active)}
    >
      <Paper className='flexible jCenter aCenter userDropdown'>
        <Icon name='user' width={40} height={40} fill={color}/>
      </Paper>
      {active &&
        <Paper className="Dropdown_content">
          <Paper flexName="flexible vertical">
            <Paper className="dropdown-list" ref={wrapperRef}>
              {
                userProfileData.map((item) => (
                  <NavLink
                    key={item.value}
                    to={item.url}
                  >
                    <Span>
                      {t(item.label)}
                    </Span>
                  </NavLink>
                ))
              }
            </Paper>
          </Paper>
        </Paper>
      }
    </Paper>
  )
}

export default withRouter(UserDropdown)
