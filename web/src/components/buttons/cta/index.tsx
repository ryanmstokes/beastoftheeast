/** @jsx jsx */
import { jsx, Box, Link, Button } from 'theme-ui'
import { cta, navItem, noWrap } from 'src/components/buttons/cta/styles'

const Cta = () => (
  <Link href="/" sx={navItem}>
    <Button sx={cta}>
      <Box sx={noWrap}>Book Now</Box>
    </Button>
  </Link>
)

export default Cta
