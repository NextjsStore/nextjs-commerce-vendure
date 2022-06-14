import React from 'react'
import SideBarTop from '../../Sidebar'
import HeaderMid from '../../HeaderMid'
import HeaderCenter from '../../HeaderCenter'
import Footer from '../../Footer'
import Copyright from '../../Copyright'

const Layout = ({ children }) => {
  return (
    <div>
      <SideBarTop />
      <HeaderMid />
      <HeaderCenter />

      {children}

      <Footer />
      <Copyright />
    </div>
  )
}
export default Layout
