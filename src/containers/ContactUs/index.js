import React from 'react';
import { connect } from 'react-redux';
import {
    NavLink,
    withRouter,
  } from 'react-router-dom';
  
import { 
  Paper,
  TextField
} from '../../components'
import './style.scss'

import { useTranslator } from '../../utils/translator';
const ContactUs = () => {


  const { t } = useTranslator();
  return (

    <>
      <section className="ContactUs flexible vertical jCenter aStart" >
        <Paper className="flexible jEnd  aStart ContactUsMain">
          <Paper className="flexible ContactUsForm">
            <Paper className="flexible ContactUsMainText">
              Contact Us
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
                placeholder={t("_Number_")}
                type='number'
                size="medium"
              />
            </Paper>
          </Paper>
        </Paper>
      </section>
    </>
  )
}

export default connect()(ContactUs);
