import Layout from "../compoments/Layout";
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
        <CallToAction/>
        </Layout>
        


        </>
     );
}
 
export default HomePage;



