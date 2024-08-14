import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [view, setView] = useState('login');

  const handleShowRegister = (event) => {
    event.preventDefault();
    setView('register');
  };

  const handleShowLogin = (event) => {
    event.preventDefault();
    setView('login');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setView('welcome');
  };

  const goToHome = () => {
    window.location.href = 'index.html';
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className={`custom-container p-4 bg-white shadow rounded ${view === 'login' ? '' : 'd-none'}`} id="login-container">
        <h2 className="mb-4">Login</h2>
        <form id="login-form">
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Senha" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
        <a href="#" className="d-block mt-3 text-primary" onClick={handleShowRegister}>Cadastrar-se</a>
      </div>

      <div className={`custom-container p-4 bg-white shadow rounded ${view === 'register' ? '' : 'd-none'}`} id="register-container">
        <h2 className="mb-4">Cadastro</h2>
        <form id="register-form" onSubmit={handleRegisterSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Nome completo" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Senha" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
        </form>
        <a href="#" className="d-block mt-3 text-primary" onClick={handleShowLogin}>Já tem uma conta? Faça login</a>
      </div>

      <div className={`custom-container p-4 bg-white shadow rounded ${view === 'welcome' ? '' : 'd-none'}`} id="welcome-container">
        <h2 className="mb-4">Bem-vindo à Digital Store!</h2>
        <p>Aproveite o nosso site.</p>
        <button onClick={goToHome} className="btn btn-primary w-100">Ir para a página inicial</button>
      </div>
    </div>
  );
}

export default App;
