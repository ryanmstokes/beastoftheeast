/** @jsx jsx */
import { Link, jsx } from 'theme-ui'

const NavLinks = ({ links }) => {
  console.log('links', links)
  return links.map(({ href, title }) => (
    <Link href={href} key={'navlink' + title} variant="nav">
      {title}
    </Link>
  ))
}

export default NavLinks
