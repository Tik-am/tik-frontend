import React, { forwardRef } from 'react'
import {
  Paper,
  Button
} from '../..'

import { useTranslator } from '../../../utils/translator'

import './style.scss'

const Stepper = forwardRef(({
  steps,
  children,
  onClose
}, ref) => {
  const { t } = useTranslator()

  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    console.log('activeStep', activeStep)
    if (!activeStep) {
      onClose()
    }
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Paper className='StepperContainer' ref={ref}>
      {steps[activeStep]}
      {activeStep !== steps.length - 1 && (
        <>
          <Paper className='Steppers'>
            <Button
              width='250px'
              text={t('Back')}
              margin='20px 0 0 0'
              color='#19cac2'
              border='solid 2px #19cac2'
              borderRadius='41'
              disabled={activeStep === 0}
              onClick={handleBack}
            >
                Back
            </Button>
            <Button
              width='250px'
              text={t('Continue')}
              margin='20px 0 0 0'
              color='#fff'
              border='none'
              background='linear-gradient(99deg, #44ccff -101%, #00caa0 95%)'
              disabled={activeStep === 0}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Paper>
        </>
      )}
    </Paper>
  )
})

export default Stepper
