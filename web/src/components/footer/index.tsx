import { Box, Container } from 'theme-ui'

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        bg: 'white',
        height: '30px',
        width: 'full',
      }}
    >
      <Container>Hello</Container>
    </Box>
  )
}
export default Footer
