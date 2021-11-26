/** @jsx jsx */
import { Form, Submit } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { jsx, Button, Box, Flex, Label } from 'theme-ui'
import SelectInput from 'src/components/form/inputs/select-input'
import DateInput from 'src/components/form/inputs/date-input'
import {
  dateWrap,
  SubmitGhost,
  alignSubmit,
  columGap,
} from 'src/components/form/forms/booking-form/styles'
import { navigate, routes } from '@redwoodjs/router'

const BookingForm = () => {
  const formMethods = useForm()

  const title = 'Location'
  const title2 = 'Pick up'
  const title3 = 'Return'
  const titleBtn = 'Check Availability'

  const onSubmit = (data) => {
    //console.log(data)
    formMethods.reset()
    navigate(routes.newBooking())
  }

  return (
    <Box>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Box>
          <Label>{title}</Label>
          <SelectInput />
          <Flex sx={columGap}>
            <Flex sx={dateWrap}>
              <Label>{title2}</Label>
              <DateInput title="from" />
            </Flex>
            <Flex sx={dateWrap}>
              <Label>{title3}</Label>
              <DateInput title="to" />
            </Flex>
          </Flex>
          <Flex sx={alignSubmit}>
            <Submit style={SubmitGhost}>
              <Button>{titleBtn}</Button>
            </Submit>
          </Flex>
        </Box>
      </Form>
    </Box>
  )
}

export default BookingForm
