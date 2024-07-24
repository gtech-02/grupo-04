import React, { useState } from 'react';
import Layout from "../compoments/Layout";
import OrderDropdown from "../compoments/filtergroup/OrderDropdown";
import FilterGroup from "../compoments/filtergroup/FilterGroup";
import ProductListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section";

const ProductListingPage = () => {
  const [ordemDaLista, setOrdemDaLista] = useState('Mais relevantes');

  return (
    <Layout>
      <div className="container">
        <OrderDropdown onOrderChange={setOrdemDaLista} />
        <div className="row">
          <div className="col-md-2 col-sm-12" style={{ padding: '10px' }}>
            <h5 className='fw-bold'>Filtrar por</h5>
            <hr />
            <FilterGroup titulo={"Marcas"} itens={["Adidas", "Nike", "Puma", "Reebok"]} />
            <FilterGroup titulo={"Categoria"} itens={["Esporte e Lazer", "Casual", "Utilitário"]} />
            <FilterGroup titulo={"Gênero"} itens={["Masculino", "Feminino", "Unisex"]} />
            <FilterGroup titulo={"Estado"} itens={["Novo", "Usado"]} formato="rounded-circle" />
          </div>
          <div className="col-md-10 col-sm-12" style={{ padding: '10px' }}>
            <Section>
              <ProductListing quantidade={12} ordenacao={ordemDaLista} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductListingPage;