import Layout from "../compoments/Layout";
import ProducListing from "../compoments/ProductListing/ProductListing";
import Section from "../compoments/section/Section";
import CallToAction from "../compoments/callAction/CallAction";
import Gallery from "../compoments/Gallery/gallery";
import Colecoes from "../compoments/Colecoes/Colecoes";
import { Carousel } from 'react-bootstrap';
import CarrosselPeace from "../compoments/carrossel/CarrosselPeace";





const HomePage = () => {

    return (
        <>
            <Layout>
                <Carousel
                    indicators={true}
                    controls={false}
                    interval={3000}
                >
                    <Carousel.Item>
                        <CarrosselPeace carrosseltext={"Melhores ofertas personalizadas"} carrosseltitle={"Queima de estoque Nike 🔥"}
                            carrosseldesc={"Consequat culpa exercitation mollit nisi except eur do do tempor laboris eiusmod irure consectetur."} carrosselimg={"https://static.vecteezy.com/system/resources/thumbnails/027/314/423/small_2x/tennis-racket-with-ball-isolated-sports-fitness-and-game-symbol-icon-3d-render-illustration-png.png"} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarrosselPeace carrosseltext={"Promoções imperdíveis"} carrosseltitle={"Nova coleção Nike para aproveitar 🌟"}
                            carrosseldesc={"Explore a nova linha de produtos Nike com descontos exclusivos."} carrosselimg={"https://static.vecteezy.com/system/resources/previews/011/998/073/original/3d-render-sport-shoes-illustration-png.png"} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarrosselPeace carrosseltext={"Ofertas Limitadas"} carrosseltitle={"Descontos especiais exclusivos Nike ✨"}
                            carrosseldesc={"Não perca as ofertas de tempo limitado em produtos Nike."} carrosselimg={"https://static.polissport.com.br/public/polissport/imagens/produtos/shorts-nike-np-8in-feminino-ar6709-010-13032.png"} />
                    </Carousel.Item>
                </Carousel>
                <Gallery galleryImage={["/collection-1.png", "/collection-1.png", "/collection-1.png",]} />
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



