import React from 'react';
import './gallery.css';
import Discount from './discount';
{/* <div class="d-flex justify-content-end mb-3">
    <button type="button" class="btn btn-primary">Direita</button>
    <button type="button" class="btn btn-secondary">Direita</button>
  </div> */}
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
       <a href="#" class="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
       <Discount/>
      </div>
      <div className="card">

        <img
          src="..\public\collection-2.png"
          className="card-img-top"
          alt="Imagem 2"
        />
       <a href="#" class="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
       <Discount/>
      </div>
      <div className="card">
        <img
          src="..\public\collection-3.png"
          className="card-img-top"
          alt="Imagem 3"
        /> 
        <a href="#" class="btn btn-primary bg-white position-absolute bottom-0 start-0 m-3">Comprar</a>
        <Discount/>
      </div>
      </div>
    </div>
  );
};

export default Gallery