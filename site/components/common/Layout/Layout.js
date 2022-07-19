import React from 'react'
import SideBarTop from '../../sidebar'
import HeaderMid from '../../HeaderMid'
import HeaderCenter from '../../HeaderCenter'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import { AppProvider } from '@lib/context/AppContext'


const Layout = (props) => {
  const { categories } = props
  return (
    <AppProvider>
      <div>
        <SideBarTop />
        <HeaderMid key={categories} categories={categories} />
        <HeaderCenter />
        {props.children}
        <Footer />
        <Copyright />
      </div>
    </AppProvider>
  )
}
export default Layout
