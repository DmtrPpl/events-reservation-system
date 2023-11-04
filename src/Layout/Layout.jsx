import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet } from "react-router-dom";

const Layout = ( ) => {
    return (
        <div style={{display:"flex"}}>
            <Sidebar />
            <main>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    );
};

export default Layout;