import React from 'react'

import {
  Bitman
} from '../../assets'

// import TextField from '@material-ui/core/TextField'

import {
  Paper,
  BackgroundImage,
  TextField,
  Button,
  Icon,
  Span
} from '../../components'

import './style.scss'

import { useTranslator } from '../../utils/translator'

const ProfileDetails = ({
  className
}) => {
  const { t } = useTranslator()

  return (
    <Paper className={`MyProfileDetails ${className}`}>
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
              src={Bitman}
              margin='0'
            />

          </Paper>
          <Paper className='MyProfilePropertiesIcon flexible'>
            <Icon name='upload' width={23} height={16} fill='#04caa6'/>
            <Span>Replace</Span>
          </Paper>

        </Paper>
        <Paper className='MyProfilePropertiesInfo flexible jAround wrap'>
          <TextField
            label="First Name"
            placeholder={t('First Name')}
            size="medium"
            defaultValue="Jhon"
          />
          <TextField
            label="Last Name"
            placeholder={t('Last Name')}
            size="medium"
            defaultValue="Hakobyan"
          />
          <TextField
            label="Your Email"
            placeholder={t('_Email_')}
            type='email'
            size="medium"
            defaultValue="John.smith@gmail.com"
          />
          <TextField
            label="Your Phone"
            placeholder={t('_Phone_')}
            size="medium"
            defaultValue="341-162-9762"
          />
          <Button
            text='Save Changes'
            color='#fff'
            background='#04caa6'
            borderRadius='27'
            padding='13'
            margin='36px 0 0 0'
          />
        </Paper>
      </Paper>
    </Paper>
  )
}

export default ProfileDetails
