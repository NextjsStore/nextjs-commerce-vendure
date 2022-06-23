import React from 'react'
import SideBarTop from '../../sidebar'
import HeaderMid from '../../HeaderMid'
import HeaderCenter from '../../HeaderCenter'
import Footer from '../../Footer'
import Copyright from '../../Copyright'

const Layout = ({ children }) => {
  // console.log('children', children)
  return (
    <div>
      <SideBarTop />
      <HeaderMid
        key={children.props.categories}
        categories={children.props.categories}
      />
      <HeaderCenter />

      {children}

      <Footer />
      <Copyright />
    </div>
  )
}
export default Layout
