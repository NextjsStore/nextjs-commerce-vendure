import React from "react";

// import header footer all pages 
import AddHead from "../../AddHead";
import SideBarTop from "../../sidebar";
import HeaderMid from "../../HeaderMid";
import HeaderCenter from "../../HeaderCenter";
import Footer from "../../Footer";
import Copyright from "../../Copyright";
//import { AppProvider } from "./context/Appcontext";

const Layout = ({ children }) => {
    return (
        // <AppProvider>
        <div>
            <AddHead />
            <SideBarTop />
            <HeaderMid />
            <HeaderCenter />

            {children}

            <Footer />
            <Copyright />

        </div>
        // </AppProvider>
    )
}
export default Layout;