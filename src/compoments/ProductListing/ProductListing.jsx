import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx";
import { produto } from '../Product';

export default function ProductListing({ quantidade, ordenacao }) {
  if (!produto || !Array.isArray(produto)) {
    return <p>Produtos não disponíveis.</p>;
  }

  const ordenarProdutos = (produtos, criterio) => {
    const produtosOrdenados = [...produtos];

    switch (criterio) {
      case 'Menor preço':
        produtosOrdenados.sort((a, b) => a.price - b.price);
        break;
      case 'Maior preço':
        produtosOrdenados.sort((a, b) => b.price - a.price);
        break;
      case 'Mais relevantes':
      default:
        break;
    }

    return produtosOrdenados;
  };

  const produtosOrdenados = ordenarProdutos(produto, ordenacao);

  const produtosExibidos = produtosOrdenados.slice(0, quantidade);

  return (
    <div className="row container mx-auto justify-content-center">
      {produtosExibidos.map((item) => (
        <Card key={item.id} produto={item} />
      ))}
    </div>
  );
}