/** @jsx jsx */
import { jsx, Button, Flex } from 'theme-ui'
import { nav } from 'src/components/global/navigation/nav/styles'
import { Menu } from 'css.gg'
import NavLinks from 'src/components/global/navigation/nav-links'
import Cta from 'src/components/buttons/cta'
import ProfileLink from 'src/components/buttons/profile-link'
import LanguageDropDown from 'src/components/global/language-dropdown'

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
          <LanguageDropDown />
          <ProfileLink sx={{ mt: -1 }} />
        </nav>
      </Flex>
      <Button variant="burger">
        <Menu />
      </Button>
    </Flex>
  )
}
export default Nav
