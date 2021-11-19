/** @jsx jsx */
import { jsx, Flex, Box, Heading } from 'theme-ui'
import { Facebook, Instagram, Youtube } from 'css.gg'
import {
  iconWrap,
  icon,
  irregularIcon,
} from 'src/components/buttons/social-media-links/styles'

const SocialMediaLinks = () => (
  <Flex sx={{ alignItems: 'center' }}>
    <Flex>
      <Heading as="h4" variant="footer">
        Find us on:
      </Heading>
    </Flex>
    <Flex sx={iconWrap} style={{ background: '#4267B2' }}>
      <Box sx={{ width: 'full' }}>
        <Facebook sx={icon} />
      </Box>
    </Flex>
    <Flex sx={iconWrap} style={{ background: '#bc2a8d' }}>
      <Box sx={{ width: 'full' }}>
        <Instagram sx={icon} />
      </Box>
    </Flex>
    <Flex sx={iconWrap} style={{ background: '#c4302b' }}>
      <Box sx={{ width: 'full' }}>
        <Youtube sx={irregularIcon} />
      </Box>
    </Flex>
  </Flex>
)

export default SocialMediaLinks
