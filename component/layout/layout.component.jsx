import Nav from '../nav'
import { SLayout } from './layout.style'

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Nav />
      {children}
    </SLayout>
  )
}

export default Layout