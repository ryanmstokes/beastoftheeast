/** @jsx jsx */
import React from 'react'
import { jsx, Card, Heading, Box, Paragraph } from 'theme-ui'
import { hero, fakeBackdrop } from 'src/components/hero/styles'
import 'react-datepicker/dist/react-datepicker.css'
import BookingForm from 'src/components/booking-form'

const Hero = () => {
  const title = 'Discover Scotland with BOE Campervans!'
  const title2 = 'Book your campervan trip,'
  const title3 = 'from just £35 per day, '
  const title4 = 'with full insurance and mileage!'
  return (
    <Card variant="primary" sx={hero}>
      <Box sx={fakeBackdrop}></Box>
      <Heading as="h1">{title}</Heading>
      <Paragraph sx={{ mb: 3 }}>
        <Box sx={{ display: ['none', 'inline'] }}>{title2} &nbsp;</Box>
        {title3}
        <Box sx={{ display: ['none', 'inline'] }}>{title4}</Box>
      </Paragraph>
      <BookingForm />
    </Card>
  )
}
export default Hero
