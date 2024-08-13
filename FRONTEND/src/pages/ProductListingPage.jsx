import React, { useState } from 'react';
import Layout from "../compoments/Layout";
import OrderDropdown from "../compoments/filtergroup/OrderDropdown";
import FilterGroup from '../compoments/filtergroup/FilterGroup';
import ProductListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section";


const ProductListingPage = () => {
  const [ordemDaLista, setOrdemDaLista] = useState('Mais relevantes');

 
  const [filtros, setFiltros] = useState({
    Marcas: [],
    Categoria: [],
    Gênero: [],
    Estado: [],
  });

  
  const handleFilterChange = (titulo, item) => {
    setFiltros((prevFiltros) => {
      const itensAtualizados = prevFiltros[titulo].includes(item)
        ? prevFiltros[titulo].filter((i) => i !== item)
        : [...prevFiltros[titulo], item]; 

      return {
        ...prevFiltros,
        [titulo]: itensAtualizados,
      };
    });
  };

  return (
    <Layout>
      <div className="container">
        <OrderDropdown onOrderChange={setOrdemDaLista} />
        <div className="row">
          <div className="col-md-2 col-sm-12" style={{ padding: '10px' }}>
            <h5 className='fw-bold'>Filtrar por</h5>
            <hr />
            <FilterGroup 
              titulo={"Marcas"} 
              itens={["Adidas", "Nike", "Puma", "Reebok"]}
              formato=""
              onChange={handleFilterChange}
            />
            <FilterGroup 
              titulo={"Categoria"} 
              itens={["Esporte", "Casual", "Utilitário"]} 
              formato=""
              onChange={handleFilterChange}
            />
            <FilterGroup 
              titulo={"Gênero"} 
              itens={["Masculino", "Feminino", "Unisex"]} 
              formato=""
              onChange={handleFilterChange}
            />
            <FilterGroup 
              titulo={"Estado"} 
              itens={["Novo", "Usado"]} 
              formato="rounded-circle" 
              onChange={handleFilterChange}
            />
          </div>
          <div className="col-md-10 col-sm-12" style={{ padding: '10px' }}>
            <Section>
              <ProductListing 
                quantidade={12} 
                ordenacao={ordemDaLista} 
                filtros={filtros}
              />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;