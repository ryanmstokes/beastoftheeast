import { Form } from '@redwoodjs/forms'
import { Button, Label, Box, Flex } from 'theme-ui'
import SelectInput from 'src/components/select-input'
import DateInput from 'src/components/date-input'

const BookingForm = () => (
  <Box>
    <Form onSubmit={(e) => e.preventDefault()}>
      <Box>
        <Label
          htmlFor="location"
          variant="label"
          sx={{
            mb: 1,
          }}
        >
          Location
        </Label>
        <SelectInput />
        <Flex sx={{ columnGap: '20px' }}>
          <Box
            sx={{
              width: '50%',
              cursor: 'pointer',
            }}
          >
            <Label
              htmlFor="start"
              variant="label"
              sx={{
                mb: 1,
              }}
            >
              Pick up
            </Label>
            <DateInput title="from" />
          </Box>
          <Box
            sx={{
              width: '50%',
              cursor: 'pointer',
            }}
          >
            <Label
              htmlFor="end"
              variant="label"
              sx={{
                mb: 1,
              }}
            >
              Return
            </Label>
            <DateInput title="to" />
          </Box>
        </Flex>
        <Flex sx={{ justifyContent: 'flex-end', mt: 4 }}>
          <Button
            sx={{
              backgroundColor: 'colors.background.primary',
              cursor: 'pointer',
            }}
          >
            Book Now
          </Button>
        </Flex>
      </Box>
    </Form>
  </Box>
)

export default BookingForm
