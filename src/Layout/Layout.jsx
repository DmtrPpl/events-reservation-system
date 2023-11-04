import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import AuthorizationRouters from "../routes/AuthorizationRouters";

const Layout = ( ) => {
    return (
        <div>
            <AuthorizationRouters />
            <main>
                <Header />
                <Routers />
                <Footer />
            </main>
        </div>
            
        
    );
};

export default Layout; 