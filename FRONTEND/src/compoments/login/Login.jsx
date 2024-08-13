import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsRegistered(true);
  };

  const goToHome = () => {
    // Adicione a lógica para redirecionar para a página inicial
    console.log('Redirecionando para a página inicial...');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {!isRegistered ? (
        <div className="bg-white p-4 rounded shadow-sm" style={{ width: '300px' }}>
          <h2 className="text-center mb-4 text-dark">Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome completo"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Cadastrar
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow-sm" style={{ width: '300px' }}>
          <h2 className="text-center mb-3 text-dark">Bem-vindo à Digital Store!</h2>
          <p className="text-center mb-3">Aproveite o nosso site.</p>
          <a href='/Home'>
          <button
            onClick={goToHome}
            className="btn btn-primary w-100"
          >
            Ir para a página inicial
          </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Login;