import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrossel.css';

const Carrossel = () => {
    return (
      <Carousel
        indicators={true}
        controls={false}
        interval={3000}
      >
        <Carousel.Item>
          <div className="carousel-content d-flex justify-content-center">
            <div className="carousel-text">
              <h6 className="text-warning">Melhores ofertas personalizadas</h6>
              <h1>Queima de estoque Nike <span role="img" aria-label="fire">🔥</span></h1>
              <p>Consequat culpa exercitation mollit nisi except eur do do tempor laboris eiusmod irure consectetur.</p>
              <button className="btn btn-primary">Ver Ofertas</button>
            </div>
            <img
              className="carousel-image img-fluid"
              src="https://static.vecteezy.com/system/resources/thumbnails/027/314/423/small_2x/tennis-racket-with-ball-isolated-sports-fitness-and-game-symbol-icon-3d-render-illustration-png.png" // Substitua pelo link da imagem do tênis
              alt="Nike Shoes"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content justify-content-center">
            <div className="carousel-text">
              <h6 className="text-warning">Promoções imperdíveis</h6>
              <h1>Nova coleção Nike para aproveitar<span role="img" aria-label="star"> 🌟</span></h1>
              <p>Explore a nova linha de produtos Nike com descontos exclusivos.</p>
              <button className="btn btn-primary">Ver Ofertas</button>
            </div>
            <img
              className="carousel-image"
              src="https://static.vecteezy.com/system/resources/previews/011/998/073/original/3d-render-sport-shoes-illustration-png.png" // Substitua pelo link da imagem do segundo tênis
              alt="Nike Shoes"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content justify-content-center">
            <div className="carousel-text">
              <h6 className="text-warning">Ofertas Limitadas</h6>
              <h1>Descontos especiais Nike <span role="img" aria-label="tag">✨</span></h1>
              <p>Não perca as ofertas de tempo limitado em produtos Nike.</p>
              <button className="btn btn-primary">Ver Ofertas</button>
            </div>
            <img
              className="carousel-image img-fluid"
              src="https://17889.cdn.simplo7.net/static/17889/sku/mulheres-tenis-tenis-nike-dc3729-003-revolution-6-preto-branco-1698772900507.png" // Substitua pelo link da imagem do terceiro tênis
              alt="Nike Shoes"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    );
  };
  
  export default Carrossel;