import React from 'react';
import './gallery.css';
import Discount from './discount';

const Gallery = () => {
  return (
  <div className='agrupar'>

    <div className="card-group">

      <div className="card position-relative">
        <img
          src="..\public\collection-1.png"
          className="card-img-top"
          alt="Imagem 1"
        />
       <a href="#" className="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
       <Discount desconto = {"30"}/>
      </div>
      <div className="card">

        <img
          src="..\public\collection-2.png"
          className="card-img-top"
          alt="Imagem 2"
        />
       <a href="#" className="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
       <Discount desconto = {"30"}/>
      </div>
      <div className="card">
        <img
          src="..\public\collection-3.png"
          className="card-img-top"
          alt="Imagem 3"
        /> 
        <a href="#" className="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
        <Discount desconto = {"30"}/>
      </div>
      </div>
    </div>
  );
};

export default Gallery