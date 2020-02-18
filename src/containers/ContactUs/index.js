import React from 'react';
import { connect } from 'react-redux';
import {
    NavLink,
    withRouter,
  } from 'react-router-dom';
  
import { 
  Paper,
  TextField,
  RadioButtons,
  Button
} from '../../components'

import './style.scss'

import { useTranslator } from '../../utils/translator';
const ContactUs = () => {


  const { t } = useTranslator();
  const data = [
    { value: 'Email', label: t("_Email_") },
    { value: 'Phone', label: t("_Phone_") }
  ]
  return (
    <>
      <section className="ContactUs flexible vertical jCenter aStart" >
        <Paper className="flexible jEnd  aStart ContactUsMain">
          <Paper className="flexible ContactUsForm">
            <Paper className="flexible ContactUsMainText">
              {t("_ContactUs_")}
            </Paper>
            <Paper className="flexible ContactUsMainInputs">
              <TextField
                placeholder={t("_Name_")}
                size="medium"
              />
              <TextField
                placeholder={t("_Email_")}
                type='email'
                size="medium"
              />
              <TextField
                placeholder={t("_Phone_")}
                type='number'
                size="medium"
              />
            </Paper>
            <Paper className="flexible vertical ContactUsPreferredMethod">
              <Paper className="flexible vertical ContactUsPreferredMethodText">
                {t("_PreferredMethodOfCommunication_")}
              </Paper>
              <Paper className="flexible">
                <RadioButtons data={data} defaultValue={data[0].value}/>
              </Paper>

            </Paper>
            <Paper className="flexible ContactUsMainInputs">
              <TextField
                placeholder={t("_Message_")}
                type='text'
                size="medium"
              />
            </Paper>
            <Paper>
              <Button 
                text={t("_Send_")}
                margin='50px 0 0 0'
                color='#381a57'
                border='solid 2px #381a57'
              />
            </Paper>
          </Paper>
        </Paper>
      </section>
    </>
  )
}

export default connect()(ContactUs);
