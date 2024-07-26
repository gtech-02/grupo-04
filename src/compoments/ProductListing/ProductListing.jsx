import React from 'react';
import './ProductListing.css';
import Card from "../../compoments/ProductCard/ProductCard.jsx";
import { produto } from '../../../json/Product';

export default function ProductListing({ quantidade = 12, ordenacao = 'Mais relevantes', searchQuery = '', filtros = {} }) {
  if (!produto || !Array.isArray(produto)) {
    return <p>Produtos não disponíveis.</p>;
  }

  const calcularPrecoComDesconto = (produto) => {
    if (produto.discount) {
      const desconto = produto.discountValue || 0;
      return produto.originalPrice - (produto.originalPrice * desconto / 100);
    }
    return produto.originalPrice;
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

  // Certifique-se de que os filtros têm valores padrão caso não sejam fornecidos
  const filtrosAtuais = {
    Marcas: filtros.Marcas || [],
    Categoria: filtros.Categoria || [],
    Gênero: filtros.Gênero || [],
    Estado: filtros.Estado || [],
  };

  const produtosFiltrados = produto.filter((item) => {
    const queryMatch = (item.category && item.category.toLowerCase().includes((searchQuery || '').toLowerCase())) ||
                       (item.name && item.name.toLowerCase().includes((searchQuery || '').toLowerCase()));

    const filtroMarcas = filtrosAtuais.Marcas.length === 0 || filtrosAtuais.Marcas.includes(item.brand);
    const filtroCategoria = filtrosAtuais.Categoria.length === 0 || filtrosAtuais.Categoria.includes(item.category);
    const filtroGenero = filtrosAtuais.Gênero.length === 0 || filtrosAtuais.Gênero.includes(item.gender);
    const filtroEstado = filtrosAtuais.Estado.length === 0 || filtrosAtuais.Estado.includes(item.state);

    return queryMatch && filtroMarcas && filtroCategoria && filtroGenero && filtroEstado;
  });

  // Usar produtosFiltrados se houver resultado, caso contrário, usar a lista completa
  const produtosParaExibir = produtosFiltrados.length === 0 ? produto : produtosFiltrados;

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