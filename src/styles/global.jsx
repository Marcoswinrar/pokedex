import { createGlobalStyle } from 'styled-components'
import Background from '../assets/images/background.png'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: no-repeat center center fixed url(${Background});
    background-size: cover;
  }
`

export default GlobalStyle
