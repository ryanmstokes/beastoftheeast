/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui'
import { SelectField, FieldError } from '@redwoodjs/forms'
import { ChevronDown } from 'css.gg'
import {
  iconWrap,
  iconStyle,
  selectFieldWrap,
  selectField,
} from 'src/components/form/inputs/select-input/styles'

const SelectOptions = ({ options }) => {
  return options.map(({ title }) => <option key={title}>{title}</option>)
}

const SelectInput = () => {
  const selectOptions = [
    { title: 'Edinburgh' },
    { title: 'Glasgow' },
    { title: 'Aberdeen' },
    { title: 'Inverness' },
  ]
  return (
    <Box>
      <Flex sx={selectFieldWrap}>
        <SelectField
          name="location"
          id="location"
          sx={selectField}
          validation={{
            required: true,
          }}
        >
          <SelectOptions options={selectOptions} />
        </SelectField>
        <Box sx={iconWrap}>
          <ChevronDown style={iconStyle} />
        </Box>
      </Flex>
      <FieldError name="location" className="error-message" />
    </Box>
  )
}

export default SelectInput
