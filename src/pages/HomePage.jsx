import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section";
import CallToAction from "../compoments/callAction/CallAction";
import ProductDetails from "../compoments/productDetails/ProductDetails"


import Gallery from "../compoments/Gallery/gallery";
import CallToAction from "../compoments/callAction/CallAction";
import Colecoes from "../compoments/Colecoes/Colecoes";
import Carrossel from "../compoments/carrossel/carrossel";


const HomePage = () => {

    return ( 
        <>
        <Layout>
        <Carrossel/>
        <Gallery/>
        <Colecoes/>
        <Section >
        <ProducListing quantidade={8}/>
        </Section>
        <CallToAction/>
        </Layout>
        
        </>

        
     );
}

 
export default HomePage;



