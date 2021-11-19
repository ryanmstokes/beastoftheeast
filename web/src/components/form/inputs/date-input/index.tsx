/** @jsx jsx */
import { DateField, FieldError } from '@redwoodjs/forms'
import { jsx, Box } from 'theme-ui'
import {
  dateWrap,
  dateInput,
} from 'src/components/form/inputs/date-input/styles'

const DateInput = ({ title }) => {
  const dateErrorMessage = '*Select Date'
  return (
    <Box sx={{ width: 'full' }}>
      <Box sx={dateWrap}>
        <DateField
          name={title}
          sx={dateInput}
          key={title}
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                console.log(value.getDate())
                return value.getDate() || dateErrorMessage
              },
            },
          }}
        />
      </Box>
      <FieldError name={title} sx={{ color: 'red' }} />
    </Box>
  )
}

export default DateInput
