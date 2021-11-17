/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { container, appBar } from 'src/components/global/app-bar/styles'
import Nav from 'src/components/global/navigation/nav'
import Logo from 'src/components/global/logo'

const AppBar = () => {
  return (
    <div sx={appBar}>
      <Container sx={container}>
        <Logo />
        <Nav />
      </Container>
    </div>
  )
}

export default AppBar
