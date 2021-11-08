/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { container, appBar } from 'src/components/app-bar/styles'
import Nav from 'src/components/nav/'
import Logo from 'src/components/logo'

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
