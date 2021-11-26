/** @jsx jsx */
import { jsx, Container, Box, Heading, Flex } from 'theme-ui'
import { container, appBar } from 'src/components/global/app-bar/styles'
import Nav from 'src/components/global/navigation/nav'
import Logo from 'src/components/global/logo'

const AppBar = () => {
  return (
    <Box>
      <div sx={appBar}>
        <Container sx={container}>
          <Logo />
          <Nav />
        </Container>
      </div>
      <Box sx={{ bg: 'dark.secondary', p: 1 }}>
        <Container sx={container}>
          <Heading
            as="h3"
            variant="paragraph"
            sx={{ color: 'white', width: '100%', textAlign: 'center', mt: 0 }}
          >
            Get 10% off your rental using code:
            <span
              sx={{
                fontWeight: '400',
                textDecoration: 'underline',
                color: 'yellow',
              }}
            >
              #christmascamping
            </span>
          </Heading>
        </Container>
      </Box>
    </Box>
  )
}

export default AppBar
