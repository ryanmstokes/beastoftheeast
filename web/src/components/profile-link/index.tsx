/** @jsx jsx */
import { jsx, Box, Flex, Link } from 'theme-ui'
import { Profile } from 'css.gg'
import { profileLink } from 'src/components/profile-link/styles'

const ProfileLink = () => (
  <Box>
    <Link href="/">
      <Flex>
        <Profile sx={profileLink} />
      </Flex>
    </Link>
  </Box>
)

export default ProfileLink
