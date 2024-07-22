import React from 'react';
import './Colecoes.css';

const Colecoes = () => {
  const colecoes = [
    { name: 'Camisetas', icon: '👕' },
    { name: 'Calças', icon: '👖' },
    { name: 'Bonés', icon: '🎩' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Tênis', icon: '👟' }
  ];

  return (
    <div className="colecoes-em-destaque">
      <h2 className='m-5 fw-bold'> Coleções em destaque</h2>
      <div className="colecoes">
        {colecoes.map((colecao) => (
          <div key={colecao.name} className="colecao-item">
            <div className="icon">{colecao.icon}</div>
            <p>{colecao.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colecoes;
