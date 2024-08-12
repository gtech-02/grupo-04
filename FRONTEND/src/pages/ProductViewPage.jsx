import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"
import ProductDetails from "../compoments/productDetails/ProductDetails"

const ProductViewPage = () => {
  return (
    <>
      <Layout>
        <ProductDetails />
        <Section title={"Produtos em alta"} linkText={"Ver Todos"}>
          <ProducListing quantidade={4} />
        </Section>
      </Layout>
    </>
  );
}

export default ProductViewPage;