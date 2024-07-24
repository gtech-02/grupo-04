import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx";
import { produto } from '../Product';

export default function ProductListing({ quantidade, ordenacao }) {
  if (!produto || !Array.isArray(produto)) {
    return <p>Produtos não disponíveis.</p>;
  }

  const calcularPrecoComDesconto = (produto) => {
    if (produto.discount) {
      const desconto = produto.discountValue || 0;
      return produto.originalPrice - (produto.originalPrice * desconto / 100);
    }
    return produto.price;
  };

  const ordenarProdutos = (produtos, criterio) => {
    const produtosOrdenados = [...produtos];

    switch (criterio) {
      case 'Menor preço':
        produtosOrdenados.sort((a, b) => calcularPrecoComDesconto(a) - calcularPrecoComDesconto(b));
        break;
      case 'Maior preço':
        produtosOrdenados.sort((a, b) => calcularPrecoComDesconto(b) - calcularPrecoComDesconto(a));
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
        <Card key={item.id} produto={{...item}} />
      ))}
    </div>
  );
}