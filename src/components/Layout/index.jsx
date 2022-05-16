import PropTypes from 'prop-types'
import Header from '../Header'
import Navbar from '../Navbar'
import LayoutContainer from './styled'

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    <Navbar />
    {children}
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
