/** @jsx jsx */
import React from 'react'
import { jsx, Card, Heading, Box, Paragraph } from 'theme-ui'
import { hero, fakeBackdrop } from 'src/components/cards/hero/styles'
import 'react-datepicker/dist/react-datepicker.css'
import BookingForm from 'src/components/form/inputs/forms/booking-form'

const Hero = () => {
  const title = 'Discover Scotland with BOE Campervans!'
  const subTitle = 'from just £35 per day,'
  const subTitleLG =
    'Book your campervan trip,from just £35 per day, with full insurance and mileage!'
  return (
    <Card variant="primary" sx={hero}>
      <Box sx={fakeBackdrop}></Box>
      <Heading as="h1">{title}</Heading>
      <Paragraph sx={{ mb: 3, mt: 2 }}>
        <Box sx={{ display: ['none', 'inline'] }}>{subTitleLG} &nbsp;</Box>
        <Box sx={{ display: ['inline', 'none'] }}>{subTitle}</Box>
      </Paragraph>
      <BookingForm />
    </Card>
  )
}
export default Hero
