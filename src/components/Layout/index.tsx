import React from 'react'
import Header from '../Header'
import LayoutContainer from './styled'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
)

export default Layout
