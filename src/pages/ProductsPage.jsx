import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProducListing quantidade={9} />
      </Layout>
    </>
  );
}

export default ProductPage;