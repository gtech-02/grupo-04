import Layout from "../compoments/Layout";
import FilterGroup from "../compoments/filtergroup/FilterGroup";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"
const ProductViewPage = () => {
    return ( 
        <>
            <Layout>
                <h1>Produtos</h1>
                <h2>Bem vindo a seção de produtos</h2>
        <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-12" style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <FilterGroup/>
        </div>
        <div className="col-md-10 col-sm-12" style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
        <Section>
        <ProducListing quantidade={6}/>
        <ProducListing quantidade={6}/>
        </Section>
        </div>
      </div>
      </div>
            </Layout>
          

        </>
     );
}
 
export default ProductViewPage;