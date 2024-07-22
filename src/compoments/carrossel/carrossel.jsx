import React, { useState } from 'react';
import image1 from '../../../public/home-slide-4.jpeg'
import image2 from '../../../public/home-slide-5.jpeg'
import image3 from '../../../public/home-slide-6.jpeg'
const Carrossel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const imagens = [
    '../../../public/home-slide-4.jpeg',
    '../../../public/home-slide-5.jpeg',
    '../../../public/home-slide-6.jpeg'
  ];

  const handlePrev = () => {
    const newIndex = (activeIndex === 0) ? imagens.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex === imagens.length - 1) ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagens.map((imagem, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
            <img src={imagem} className="d-block w-100" alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext} data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
  
}

export default Carrossel;