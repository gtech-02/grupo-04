import Layout from "../compoments/Layout";
import Card from "../compoments/ProductCard/ProductCard";
// import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section"

const HomePage = () => {

    return ( 
        <>
        <Layout>
            <h1>Home Page</h1>
            <h2>Bem-vindo a Home page</h2>
        </Layout>
        
        <Section >
            <div  class="row container mx-auto justify-content-center" >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
             </div>
        
        </Section>
        
        </>

        
     );
}
 
export default HomePage;