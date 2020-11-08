import Link from 'next/link'
import { SA, SNav } from './nav.style'

const Nav = () => {
  return (
    <SNav>
      <Link href="/">
        <SA src="/static/logo.png" />
      </Link>

      <Link href="/about">
        <SA>about</SA>
      </Link>

      <Link href="/contact">
        <SA>contact</SA>
      </Link>

      <Link href="/blog">
        <SA>blog</SA>
      </Link>
    </SNav>
  )
}

export default Nav
