/** @jsx jsx */
import React, { useState } from 'react'
import {
  jsx,
  Button,
  Card,
  Heading,
  Label,
  Box,
  Select,
  Flex,
  Paragraph,
} from 'theme-ui'
import { Form } from '@redwoodjs/forms'
import { Calendar, Pin, ChevronDown } from 'css.gg'
import DatePicker from 'react-datepicker'
import {
  hero,
  icon,
  dateWrap,
  dateField,
  chevronDown,
} from 'src/components/hero/styles'
import 'react-datepicker/dist/react-datepicker.css'
import 'src/components/hero/styles/index.css'

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <Card variant="primary" sx={hero}>
      <Heading as="h1">Discover Scotland with BOE Campervans!</Heading>
      <Paragraph
        sx={{
          pl: 0,
          pr: 2,
          mb: 3,
          mt: 10,
        }}
      >
        <Box sx={{ display: ['none', 'inline'] }}>
          Book your campervan trip,&nbsp;
        </Box>
        from just <strong>£35</strong> per day{' '}
        <Box sx={{ display: ['none', 'inline'] }}>
          wth full insurance and mileage!
        </Box>
      </Paragraph>
      <Form>
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label
            htmlFor="location"
            variant="label"
            sx={{
              mb: 1,
            }}
          >
            <Pin style={{ marginTop: '2px' }} />
            <Box sx={{ ml: 2 }}>Pick Up</Box>
          </Label>
          <Select
            name="location"
            id="location"
            mb={3}
            sx={{
              borderColor: '#999',
              color: '#s2d2b2b',
              p: '10px',
            }}
            arrow={
              <Box sx={{ ml: -28, alignSelf: 'center', pointerEvents: 'none' }}>
                <ChevronDown style={chevronDown} />
              </Box>
            }
          >
            <option>Edinburgh</option>
            <option>Glasgow</option>
            <option>Aberdeen</option>
          </Select>
          <Flex sx={{ columnGap: '20px' }}>
            <Box sx={dateField}>
              <Label
                htmlFor="start"
                variant="label"
                sx={{
                  mb: 1,
                }}
              >
                <Calendar style={icon} /> <Box sx={{ ml: 2 }}>From</Box>
              </Label>
              <Box sx={dateWrap}>
                <Flex>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    id="start"
                    className="dateInput"
                  />
                  <Box sx={{ ml: -15 }}>
                    <ChevronDown style={chevronDown} />
                  </Box>
                </Flex>
              </Box>
            </Box>
            <Box sx={dateField}>
              <Label
                htmlFor="end"
                variant="label"
                sx={{
                  mb: 1,
                }}
              >
                <Calendar style={icon} /> <Box sx={{ ml: 2 }}>To</Box>
              </Label>
              <Box sx={dateWrap}>
                <Flex>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    id="end"
                    className="dateInput"
                  />
                  <Box sx={{ ml: -15 }}>
                    <ChevronDown style={chevronDown} />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Flex sx={{ justifyContent: 'flex-end', mt: 4 }}>
            <Button sx={{ backgroundColor: 'text', cursor: 'pointer' }}>
              Book Now
            </Button>
          </Flex>
        </Box>
      </Form>
    </Card>
  )
}
export default Hero
