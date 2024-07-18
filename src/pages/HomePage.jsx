import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";

const HomePage = () => {

    return ( 
        <>
        <Layout>
            <h1>Home Page</h1>
            <h2>Bem-vindo a Home page</h2>
        </Layout>
        
        <ProducListing/>
        </>

        
     );
}
 
export default HomePage;