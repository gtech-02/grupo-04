import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (props) => {
    return ( 
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
        
     );
}
 
export default Layout;