import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx";
import { produto } from '../../../json/Product';

export default function ProductListing({ quantidade, ordenacao, searchQuery }) {
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
        produtosOrdenados.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return produtosOrdenados;
  };

  const produtosFiltrados = produto.filter((item) => {
    return (
      (item.category && item.category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes((searchQuery || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())) ||
      (item.name && item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes((searchQuery || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()))
    );
  });

  // Usar produtosFiltrados se houver resultado, caso contrário, usar a lista completa
  const produtosParaExibir = produtosFiltrados.length === 0 ? produto : produtosFiltrados;

  // Corrigir a chamada para ordenarProdutos removendo argumentos extras
  const produtosOrdenados = ordenarProdutos(produtosParaExibir, ordenacao);

  const produtosExibidos = produtosOrdenados.slice(0, quantidade);

  return (
    <div className="row container mx-auto justify-content-center">
      {produtosExibidos.map((item) => (
        <Card key={item.id} produto={{...item}} />
      ))}
    </div>
  );
}