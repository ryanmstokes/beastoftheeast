/** @jsx jsx */
import { jsx, Link, Button, Flex, Box } from 'theme-ui'
import { nav } from 'src/components/nav/styles'
import { Profile, Menu } from 'css.gg'
import NavLinks from 'src/components/nav-links'
import Cta from 'src/components/cta'
import ProfileLink from 'src/components/profile-link'

const Nav = () => {
  const NavLinksData = [
    { href: '/about', title: 'About' },
    { href: '/motorhomes', title: 'Motorhomes' },
    { href: '/prices', title: 'Prices' },
  ]
  return (
    <Flex sx={{ minWidth: 'auto' }}>
      <Flex>
        <nav sx={nav}>
          <Cta />
          <NavLinks links={NavLinksData} />
          <ProfileLink />
        </nav>
      </Flex>
      <Button variant="burger">
        <Menu />
      </Button>
    </Flex>
  )
}
export default Nav
