import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg'
import miniCart from '../../assets/mini-cart.svg'
import './header.css'

const NavBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate ();

    const handlesubmit = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleClick = () => {
        navigate(`/products-page?filter=${encodeURIComponent(searchQuery)}`)
    }
    return ( 
        <>
            <nav className="navbar">
                <div className="container">
                    <img src= {logoHeader} alt="Logo" className="d-inline-block align-text-top" />
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 px-6"
                            type="search"
                            value={searchQuery}
                            onChange={handlesubmit}
                            onKeyDown={(e) => e.key === 'Enter' ? handleClick() : null}
                            placeholder="Pesquisar Produto..."
                            aria-label="Search"
                            style={{ width: '500px', backgroundColor: 'rgb(228, 223, 223)', height: '45px' }}
                        />
                        <img
                            onClick={handleClick}
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

        </>
     );
}
 
export default NavBar;