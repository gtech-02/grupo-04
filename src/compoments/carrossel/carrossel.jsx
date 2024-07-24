import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrossel.css';
import CarrosselPeace from './CarrosselPeace';


const Carrossel = () => {
  return (
    <Carousel
      indicators={true}
      controls={false}
      interval={3000}
    >
      <Carousel.Item>
        <CarrosselPeace carrosseltex1={"Melhores ofertas personalizadas"} carrosseltext2={"Queima de estoque Nike 🔥"} carrosseldesc={"Consequat culpa exercitation mollit nisi except eur do do tempor laboris eiusmod irure consectetur."} carrosselimg={"https://static.vecteezy.com/system/resources/thumbnails/027/314/423/small_2x/tennis-racket-with-ball-isolated-sports-fitness-and-game-symbol-icon-3d-render-illustration-png.png"} />
      </Carousel.Item>
      <Carousel.Item>
        <CarrosselPeace carrosseltex1={"Promoções imperdíveis"} carrosseltext2={"Nova coleção Nike para aproveitar 🌟"} carrosseldesc={"Explore a nova linha de produtos Nike com descontos exclusivos."} carrosselimg={"https://static.vecteezy.com/system/resources/previews/011/998/073/original/3d-render-sport-shoes-illustration-png.png"} />
      </Carousel.Item>
      <Carousel.Item>
        <CarrosselPeace carrosseltex1={"Ofertas Limitadas"} carrosseltext2={"Descontos especiais exclusivos Nike ✨"} carrosseldesc={"Não perca as ofertas de tempo limitado em produtos Nike."} carrosselimg={"https://static.polissport.com.br/public/polissport/imagens/produtos/shorts-nike-np-8in-feminino-ar6709-010-13032.png"} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;