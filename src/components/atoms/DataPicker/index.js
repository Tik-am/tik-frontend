import 'date-fns'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

import Paper from '../Paper'
import './style.scss'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(149, 37, 251)',
      dark: '#22222'
    },
    secondary: {
      main: '#eee'
    }
  }
})

const DataPicker = ({
  onChange
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'))

  const handleDateChange = date => {
    setSelectedDate(date)
  }

  return (
    <MuiThemeProvider theme={customTheme} >
      <Paper className='PaperKeyboardDatePicker'>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <KeyboardDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            format="yyyy/MM/dd"
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
      </Paper>
    </MuiThemeProvider>
  )
}

export default DataPicker
