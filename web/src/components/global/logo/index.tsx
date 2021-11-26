/** @jsx jsx */
import { jsx, Flex, IconButton } from 'theme-ui'
import { logo, logoWrap, logoText } from 'src/components/global/logo/styles'
import { navigate, routes } from '@redwoodjs/router'

const Logo = () => {
  const goHome = () => {
    navigate(routes.home())
  }
  return (
    <Flex sx={{ mt: '21px' }}>
      <IconButton sx={logoWrap} onClick={goHome}>
        <img src="/logo-icon.jpg" sx={logo} alt="Beast of the East Logo icon" />
        <img
          src="/logo-text.jpg"
          style={logoText}
          alt="Beast of the East Logo text"
        />
      </IconButton>
    </Flex>
  )
}

export default Logo
