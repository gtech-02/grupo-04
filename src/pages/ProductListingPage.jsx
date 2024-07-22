import Layout from "../compoments/Layout";

import FilterGroup from "../compoments/filtergroup/FilterGroup";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"

import ProductDetails from '../compoments/productDetails/ProductDetails'

const ProductListiningPage = () => {
    return (
        <>
            <Layout>

                <h1>Produtos</h1>
                <h2>Bem vindo a seção de produtos</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-12" style={{ backgroundColor: 'lightblue', padding: '10px' }}>
                            <h5 className='fw-bold'>Filtrar por</h5>
                            <hr />
                            <FilterGroup titulo={"Marcas"} itens={["Adidas", "Nike", "Puma", "Reebok"]}/>
                            <FilterGroup titulo={"Categoria"} itens={["Esporte e Lazer", "Casual", "Utilitário"]} />
                            <FilterGroup titulo={"Gênero"} itens={["Masculino", "Feminino", "Unisex"]} />
                            <FilterGroup titulo={"Estado"} itens={["Novo","Usado"]} formato = "rounded-circle" />    

                        </div>
                        <div className="col-md-10 col-sm-12" style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
                            <Section>
                                <ProducListing quantidade={6} />
                                <ProducListing quantidade={6} />
                            </Section>
                        </div>
                    </div>
                </div>

            <ProductDetails />               

            </Layout>


        </>
    );
}

export default ProductListiningPage;