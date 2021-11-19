/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import languageDropdown from 'react-lang-dropdown'
import languages from 'src/lang/languages.json'
import { dropDown } from 'src/components/global/language-dropdown/styles'

const LanguageDropDown = () => {
  const [language, LanguageDropdown] = languageDropdown.useDropdown(languages, {
    naming: 'emoji',
  })

  return (
    <Box sx={dropDown}>
      <LanguageDropdown />
    </Box>
  )
}

export default LanguageDropDown
