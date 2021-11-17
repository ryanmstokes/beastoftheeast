/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui'
import { SelectField } from '@redwoodjs/forms'
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
    <Flex sx={selectFieldWrap}>
      <SelectField name="location" id="location" sx={selectField}>
        <SelectOptions options={selectOptions} />
      </SelectField>
      <Box sx={iconWrap}>
        <ChevronDown style={iconStyle} />
      </Box>
    </Flex>
  )
}

export default SelectInput
