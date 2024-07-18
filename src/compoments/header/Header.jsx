import React from 'react';
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return ( 
        <div className="header">
            <nav className="navbar">
                <div className="container">
                    <img src= {logoHeader} alt="Logo" className="d-inline-block align-text-top" />
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 px-6"
                            type="search"
                            placeholder="Pesquisar Produto..."
                            aria-label="Search"
                            style={{ width: '500px', backgroundColor: 'rgb(228, 223, 223)', height: '45px' }}
                        />
                        <img
                            className="icon-search"
                            src="https://cdn.icon-icons.com/icons2/38/PNG/512/search_4883.png"
                            alt=""
                            width="20px"
                            height="20px"
                            style={{ position: 'absolute', marginTop: '12px', marginLeft: '458px' }}
                        />
                    </form>

                    <div>
                        <a href="#" className="link-secondary">
                            Cadastrar
                        </a>
                        <button
                            type="button"
                            className="btn btn-dark"
                            style={{
                                marginLeft: '15px',
                                padding: '5px 20px',
                                backgroundColor: '#c90071',
                                border: 'none'
                            }}
                        >
                            Entrar
                        </button>
                    </div>

                    <img src= {miniCart} alt="Carrinho" />
                </div>
            </nav>

            <nav id="navbar-item" className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: '110px' }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link" to="/products">
                                Produtos
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link" to="/categories">
                                Categorias
                            </Link>
                        </li>
                        <li id='li-header' className="nav-item">
                            <Link className="nav-link" to="/orders">
                                Meus Pedidos
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Header;
