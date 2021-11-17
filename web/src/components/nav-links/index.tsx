/** @jsx jsx */
import { Link, jsx } from 'theme-ui'
import { navLink } from 'src/components/nav-links/styles'

type navLinksType = {
  href: string
  title: string
}[]

const NavLinks = ({ links }) => {
  console.log('links', links)
  return links.map(({ href, title }) => (
    <Link href={href} sx={navLink} key={'navlink' + title}>
      {title}
    </Link>
  ))
}

export default NavLinks
