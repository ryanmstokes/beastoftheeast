/** @jsx jsx */
import { jsx, Link, Button, Flex, Box } from 'theme-ui'
import { nav, cta, navItem, burger, noWrap } from 'src/components/nav/styles'
import { Profile, Menu } from 'css.gg'

const Nav = () => {
  return (
    <Flex sx={{ minWidth: 'auto' }}>
      <Flex>
        <nav sx={nav}>
          {/* <Link href="/" sx={styles.navItem}>
            <Button>Book</Button>
          </Link> */}
          <Link href="/" sx={navItem}>
            <Button sx={cta}>
              <Box style={{ whiteSpace: 'nowrap' }}>Book Now</Box>
            </Button>
          </Link>
          <Link href="/" sx={navItem}>
            About
          </Link>
          <Link href="/" sx={navItem}>
            Motorhomes
          </Link>
          <Link href="/" sx={navItem}>
            Prices
          </Link>
          <Link href="/">
            <Flex>
              <Profile sx={{ color: 'text' }} />
            </Flex>
          </Link>
        </nav>
      </Flex>
      <Button variant="burger" sx={burger}>
        <Menu />
      </Button>
    </Flex>
  )
}
export default Nav
