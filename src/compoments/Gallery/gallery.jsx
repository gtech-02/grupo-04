import React from 'react';
import './gallery.css';
import Discount from './discount';

const Gallery = ({ galleryImage }) => {
  return (
    <div className='agrupar'>
      <div className="card-group">
        {galleryImage.map((image, index) => (
          <div className="card position-relative" key={index}>
            <img
              src={image} 
              className="card-img-top"
              alt={`Imagem ${index + 1}`}
            />
            <a href="#" className="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">
              Comprar
            </a>
            <Discount desconto={"30"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;




