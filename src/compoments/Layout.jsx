import React from 'react';
import Header from './header/Header';
import ProductDetails from './productDetails/ProductDetails';
const Layout = (props) => {
    return ( 
        <>
            <Header />
            <main>
                {props.children}
                <ProductDetails />
            </main>

            <footer>footer</footer>
        </>
        
     );
}
 
export default Layout;