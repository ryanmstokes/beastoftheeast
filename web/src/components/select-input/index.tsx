/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui'
import { SelectField } from '@redwoodjs/forms'
import { ChevronDown } from 'css.gg'
import {
  iconWrap,
  iconStyle,
  selectFieldWrap,
  selectField,
} from 'src/components/select-input/styles'

const SelectInput = () => (
  <Flex sx={selectFieldWrap}>
    <SelectField name="location" id="location" sx={selectField}>
      <option>Edinburgh</option>
      <option>Glasgow</option>
      <option>Aberdeen</option>
    </SelectField>
    <Box sx={iconWrap}>
      <ChevronDown style={iconStyle} />
    </Box>
  </Flex>
)

export default SelectInput
