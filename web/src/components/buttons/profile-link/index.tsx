/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { Profile } from 'css.gg'
import { profileLink } from 'src/components/buttons/profile-link/styles'

const ProfileLink = () => (
  <IconButton title="Login">
    <Profile sx={profileLink} />
  </IconButton>
)

export default ProfileLink
