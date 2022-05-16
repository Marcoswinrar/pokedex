import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 8px;

  .active {
    color: crimson;
  }
`

export const Link = styled(NavLink)`
  padding: 4px;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-weight: lighter;
`
