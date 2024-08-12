import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import { useLocation } from 'react-router-dom';
const ProductPage = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('filter') || '';
  return (
    <>
      <Layout>
        <ProducListing quantidade={12} searchQuery={searchQuery} />
      </Layout>
    </>
  );
}

export default ProductPage;