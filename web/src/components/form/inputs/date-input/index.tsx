/** @jsx jsx */
import { DateField } from '@redwoodjs/forms'
import { jsx, Box } from 'theme-ui'
import {
  dateWrap,
  dateInput,
} from 'src/components/form/inputs/date-input/styles'

const DateInput = ({ title }) => (
  <Box sx={dateWrap}>
    <DateField name={title} sx={dateInput} />
  </Box>
)

export default DateInput
