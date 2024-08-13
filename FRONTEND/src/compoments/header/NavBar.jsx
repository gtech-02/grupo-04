import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import miniCart from '../../assets/mini-cart.svg';
import './header.css';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      setError('');  
    }
  };

  const handleClick = () => {
    if (searchQuery.trim() === '') {
      setError('Por favor, digite algo para pesquisar');
    } else {
      navigate(`/products-page?filter=${encodeURIComponent(searchQuery)}`);
      setError('');  
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={logoHeader} alt="Logo" className="d-inline-block align-text-top" />
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2 px-6"
              type="search"
              value={searchQuery}
              onChange={handlesubmit}
              onKeyDown={(e) => e.key === 'Enter' ? handleClick() : null}
              placeholder="Pesquisar Produto..."
              aria-label="Search"
            />
            <img
              onClick={handleClick}
              className="icon-search"
              src="https://cdn.icon-icons.com/icons2/38/PNG/512/search_4883.png"
              alt=""
              width="20px"
              height="20px"
            />
          </form>
          

          <div>
            <a href="/LoginPage" className="link-secondary">
              Cadastre-se
            </a>
            <button
              type="button"
              className="btn btn-dark btn-custom"
            >
              Entrar
            </button>
          </div>

          <img src={miniCart} alt="Carrinho" />
        </div>
      </nav>
      {error && <div className="error-message">{error}</div>}
    </>
  );
};

export default NavBar;
