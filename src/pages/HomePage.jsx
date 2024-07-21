import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"

const HomePage = () => {

    return ( 
        <>
        <Layout>
            <h1>Home Page</h1>
            <h2>Bem-vindo a Home page</h2>
        </Layout>
        
        <Section >
        <ProducListing quantidade={4}/>
        
        </Section>
        
        </>

        
     );
}
 
export default HomePage;