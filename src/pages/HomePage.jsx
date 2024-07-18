import Layout from "../compoments/Layout";
import Card from "../compoments/ProductCard/ProductCard";

const HomePage = () => {
    return ( 
        <>
        <Layout>
            <h1>Home Page</h1>
            <h2>Bem-vindo a Home page</h2>
        </Layout>
        <div>
            <Card />
        </div>


        </>
     );
}
 
export default HomePage;