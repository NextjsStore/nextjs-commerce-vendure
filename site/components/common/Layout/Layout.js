import React from 'react'
import SideBarTop from '../../sidebar'
import HeaderMid from '../../HeaderMid'
import HeaderCenter from '../../HeaderCenter'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import { Container } from '@components/ui'

const Layout = ({ children }) => {
  // console.log('children', children)
  return (
    <>
      <SideBarTop />
      <HeaderMid
        key={children.props.categories}
        categories={children.props.categories}
      />
      <HeaderCenter />
      {children}
      <Footer />
      <Copyright />
    </>
  )
}
export default Layout
