import Layout from "../compoments/Layout";
import OrderDropdown from "../compoments/filtergroup/OrderDropdown";
import FilterGroup from "../compoments/filtergroup/FilterGroup";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"

const ProductListiningPage = () => {
    return (
        <>
            <Layout>

                <div className="container">
                    <OrderDropdown />
                    <div className="row">
                        <div className="col-md-2 col-sm-12" style={{padding: '10px' }}>
                            <h5 className='fw-bold'>Filtrar por</h5>
                            <hr />
                            <FilterGroup titulo={"Marcas"} itens={["Adidas", "Nike", "Puma", "Reebok"]} />
                            <FilterGroup titulo={"Categoria"} itens={["Esporte e Lazer", "Casual", "Utilitário"]} />
                            <FilterGroup titulo={"Gênero"} itens={["Masculino", "Feminino", "Unisex"]} />
                            <FilterGroup titulo={"Estado"} itens={["Novo", "Usado"]} formato="rounded-circle" />

                        </div>
                        <div className="col-md-10 col-sm-12" style={{padding: '10px' }}>
                            <Section>
                                <ProducListing quantidade={6} />
                                <ProducListing quantidade={6} />
                            </Section>
                        </div>
                    </div>
                </div>

            </Layout>


        </>
    );
}

export default ProductListiningPage;