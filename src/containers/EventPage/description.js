import React from 'react'
import { Paper, Button } from '../../components'

import { useTranslator } from '../../utils/translator'

const Description = ({
  posterImg,
  name,
  rating,
  type,
  place,
  duration,
  description,
  year
}) => {
  const { t } = useTranslator()

  return (<Paper className='EventDescriptionContainer'>
    <Paper className='EventDescriptionMain'>
      <Paper className='EventDescriptionPosterAndTicket'>
        <Paper
          className='EventDescriptionPoster'
          style={{
            backgroundImage: `url(${posterImg})`
          }}
        >
        </Paper>
        <Button
          borderRadius='41'
          width={'244px'}
          text={t('BuyTickets')}
          border='none'
          background='linear-gradient(105deg, #44ccff -100%, #00caa0 94%);'
        />
      </Paper>
      <Paper className='flexible EventDescriptionMainInfo'>
        <Paper className='EventDescriptionYear'>
          {year}
        </Paper>
        <Paper className='flexible EventDescriptionName'>
          {name}
        </Paper>
        <Paper className='flexible EventDescriptionRating'>
          {rating}
        </Paper>
      </Paper>
      <Paper className='flexible EventDescriptionInfo'>
        <Paper className='flexible EventDescriptionTitle'>
          {type}
        </Paper>
        <Paper className='flexible EventDescriptionTitleItemsInfo'>
          {place}
        </Paper>
      </Paper>
      <Paper className='flexible EventDescriptionInfo'>
        <Paper className='flexible EventDescriptionTitle'>
        Duration
        </Paper>
        <Paper className='flexible EventDescriptionTitleItemsInfo'>
          {duration}
        </Paper>
      </Paper>
    </Paper>
    <Paper className='EventDescriptionMetaDescription'>
      <Paper className='EventDescriptionMetaDescriptionTitle'>
        {t('Description')}
      </Paper>
      <Paper className='EventDescriptionMetaDescriptionSpreed'>
        {description}
      </Paper>
    </Paper>
  </Paper>)
}
export default Description
