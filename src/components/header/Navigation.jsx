import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Navigation = () => {
    return ( 
        <>
            <nav id="navbar-item" className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: '110px' }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link li-text" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link li-text" to="/products">
                                Produtos
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link li-text" to="/categories">
                                Categorias
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link li-text" to="/home">
                                Meus Pedidos
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navigation;