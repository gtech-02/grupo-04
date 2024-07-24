import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrossel.css';

const CarrosselPeace = ({carrosseltex1,carrosseltext2,carrosseldesc,carrosselimg}) => {
    return (
            <div className="carousel-content d-flex justify-content-center">
                <div className="carousel-text">
                    <h6 className="text-warning">{carrosseltex1}</h6>
                    <h1>{carrosseltext2}</h1>
                    <p>{carrosseldesc}</p>
                    <button className="btn btn-primary">Ver Ofertas</button>
                </div>
                <img
                    className="carousel-image img-fluid"
                    src={carrosselimg}
                    alt="Nike Shoes"
                />
            </div>
    );
};

export default CarrosselPeace;