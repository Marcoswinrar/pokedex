import PropTypes from 'prop-types'
import Header from '../Header'
import LayoutContainer from './styled'

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
