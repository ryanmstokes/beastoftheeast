/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui'
import { footer, container } from 'src/components/global/footer/styles'
import NavLinks from 'src/components/global/navigation/nav-links'
import { nav } from 'src/components/global/footer/styles'
import SocialMediaLinks from 'src/components/buttons/social-media-links'

const Footer = () => {
  const NavLinksData = [
    { href: '/support', title: 'Support' },
    { href: '/legal disclaimer', title: 'Disclaimer' },
    { href: '/sitemap', title: 'Sitemap' },
  ]
  return (
    <Flex sx={footer}>
      <Container sx={container}>
        <Flex>
          <img
            src="/logo-icon.jpg"
            sx={{ width: 'auto', height: '20px', mr: 3 }}
            alt="Beast of the East Logo icon"
          />
          <Box sx={{ mr: 3 }}>-</Box>
          <nav sx={nav}>
            <NavLinks links={NavLinksData} />
          </nav>
        </Flex>
        <SocialMediaLinks />
      </Container>
    </Flex>
  )
}
export default Footer
