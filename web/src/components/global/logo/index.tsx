/** @jsx jsx */
import { jsx } from 'theme-ui'
import { logo, logoWrap, logoText } from 'src/components/global/logo/styles'

const Logo = () => {
  return (
    <div sx={logoWrap}>
      <img src="/logo-icon.jpg" sx={logo} alt="Beast of the East Logo icon" />
      <img
        src="/logo-text.jpg"
        style={logoText}
        alt="Beast of the East Logo text"
      />
    </div>
  )
}

export default Logo
