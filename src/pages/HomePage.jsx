import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section";
import CallToAction from "../compoments/callAction/CallAction";
import Gallery from "../compoments/Gallery/gallery";
import Colecoes from "../compoments/Colecoes/Colecoes";
import Carrossel from "../compoments/carrossel/Carrossel";


const HomePage = () => {

    return (
        <>
            <Layout>
                <Carrossel />
                <Gallery />
                <Colecoes />
                <Section title={"Produtos em alta"} linkText={"Ver Todos"}>
                    <ProducListing quantidade={8} />
                </Section>
                <CallToAction />
            </Layout>

        </>


    );
}


export default HomePage;



