import React from "react";
import { Outlet } from "react-router";
//import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Layout = () => {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
            {/*<Footer />*/}
        </>
    )
}
export default Layout 