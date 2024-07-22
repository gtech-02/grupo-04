import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"
import CallToAction from "../compoments/callAction/CallAction";


const HomePage = () => {

    return ( 
        <>
        <Layout>
        <Section >
        <ProducListing quantidade={8}/>
        </Section>
        <CallToAction/>
        </Layout>
        
        </>

        
     );
}

 
export default HomePage;

