import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>Nenhuma imagem disponível</div>;
  }

  const carouselContainerStyle = {
    maxWidth: '600px', // Largura máxima do carrossel
    margin: '0 auto' // Centraliza o carrossel horizontalmente
  };

  const carouselImageStyle = {
    maxHeight: '400px', // Altura máxima das imagens
    objectFit: 'cover' // Ajusta as imagens para cobrir o espaço sem distorção
  };

  return (
    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel" style={carouselContainerStyle}>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} style={carouselImageStyle} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default ProductCarousel;