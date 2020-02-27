import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'

import { useTranslator } from '../../../utils/translator'

import {
  Icon,
  Paper
} from '../..'

import {
  NavLink,
  withRouter
} from 'react-router-dom'

import './style.scss'

const DropdownLink = ({
  data
}) => {
  const { t } = useTranslator()

  const [active, setActive] = useState(false)

  const wrapperRef = useRef(null)

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

  return (
    <Paper className={classnames('Dropdown')}>
      <Paper
        onClick={() => setActive(!active)}
        className={classnames('Dropdown_label', { active })}
      >
        {/* {t(selected.label)} */}
        <Icon name="arrowDown"/>
      </Paper>
      {active &&
        <Paper className="Dropdown_content">
          <Paper flexName="flexible vertical">
            <Paper className="dropdown-list" ref={wrapperRef}>
              {
                data.map((item) => (
                  <NavLink
                    key={item.value.toString()}
                    to={item.url}
                  >
                    <span>
                      {t(item.label)}
                    </span>
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

export default withRouter(DropdownLink)
