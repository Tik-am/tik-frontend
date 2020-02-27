import React, { useState, forwardRef } from 'react'

import {
  Paper,
  TextField,
  CheckboxButton,
  Button,
  Text
} from '../../'

import './style.scss'
import { useTranslator } from '../../../utils/translator'

const Login = forwardRef(({
  onClick
}, ref) => {
  const [activeType, setActiveType] = useState('login')

  const { t } = useTranslator()

  const activeTypeHandler = (type) => {
    setActiveType(type)
  }

  const LoginFormat = () => (
    <form autoComplete="false">
      <TextField
        placeholder={t('_Email_')}
        type='email'
        size="medium"
      />
      <TextField
        placeholder={t('_Password_')}
        type='password'
        size="medium"
      />
      <Paper className='CheckboxButton'>
        <CheckboxButton label={t('KeepMeSignedIn')}/>
      </Paper>
      <Button
        width='100%'
        text={t('_Enter_')}
        margin='20px 0 0 0'
        color='#fff'
        onClick={onClick}
        background='linear-gradient(90deg,#452368 18%,#ef549e 100%)'
      />
      <Paper className='line loginTexts'>
        {t('ForgottenYourPassword')}
      </Paper>
      <Paper className='loginTexts'>
        {t('DontHaveAnAccount')}
        <Text
          text={t('Register')}
          style={{ cursor: 'pointer' }}
          onClick={() => activeTypeHandler('signup')}
        />
      </Paper>
    </form>
  )

  const SignupFormat = () => (
    <form autoComplete="false">
      <TextField
        placeholder={t('_Name_')}
        size="medium"
      />
      <TextField
        placeholder={t('_Surname_')}
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
      <TextField
        placeholder={t('_Password_')}
        type='password'
        size="medium"
      />
      <TextField
        placeholder={t('_ConfirmPassword_')}
        type='password'
        size="medium"
      />
      <Button
        width='100%'
        text={t('_Enter_')}
        margin='20px 0 0 0'
        color='#fff'
        onClick={onClick}
        background='linear-gradient(90deg,#452368 18%,#ef549e 100%)'
      />
      <Paper className='line loginTexts'>
        {t('ForgottenYourPassword')}
      </Paper>
      <Paper className='loginTexts'>
        {t('DontHaveAnAccount')}
        <Text
          text={t('Login')}
          style={{ cursor: 'pointer' }}
          onClick={() => activeTypeHandler('login')}
        />
      </Paper>
    </form>
  )

  return (
    <Paper className='Login' ref={ref}>
      <Paper className='LoginSwitcher'>
        <Paper className={`${activeType === 'login' ? 'active' : ''}`} onClick={() => activeTypeHandler('login')}>
          {t('Login')}
        </Paper>
        <Paper className={`${activeType === 'signup' ? 'active' : ''}`} onClick={() => activeTypeHandler('signup')}>
          {t('Register')}
        </Paper>
      </Paper>
      <Paper>
        {activeType === 'login'
          ? LoginFormat()
          : SignupFormat()
        }
      </Paper>
    </Paper>
  )
})

Login.displayName = 'Login'

export default Login
