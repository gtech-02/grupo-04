import React from 'react';
import Header from './Header/Header';
const Layout = (props) => {
    return ( 
        <>
            <Header />
            <main>
                {props.children}
            </main>

            <footer>footer</footer>
        </>
        
     );
}
 
export default Layout;