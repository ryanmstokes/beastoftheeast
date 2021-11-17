/** @jsx jsx */
import { jsx, Button, Flex } from 'theme-ui'
import { nav } from 'src/components/global/navigation/nav/styles'
import { Menu } from 'css.gg'
import NavLinks from 'src/components/global/navigation/nav-links'
import Cta from 'src/components/buttons/cta'
import ProfileLink from 'src/components/buttons/profile-link'

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
