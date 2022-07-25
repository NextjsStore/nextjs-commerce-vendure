import React from 'react'
import SideBarTop from '../../sidebar'
import HeaderMid from '../../HeaderMid'
import HeaderCenter from '../../HeaderCenter'
import Footer from '../../Footer'
import Copyright from '../../Copyright'
import { AppProvider } from '@lib/context/AppContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


const Layout = (props) => {
  const { categories } = props
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <SideBarTop />
        <HeaderMid key={categories} categories={categories} />
        <HeaderCenter />
        {props.children}
        <Footer />
        <Copyright />
      </QueryClientProvider>
    </AppProvider>
  )
}
export default Layout
