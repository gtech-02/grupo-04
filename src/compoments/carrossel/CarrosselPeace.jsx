import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarrosselPeace.css';

const CarrosselPeace = ({carrosseltext,carrosseltitle,carrosseldesc,carrosselimg}) => {
    return (
            <div className="carousel-content d-flex justify-content-center">
                <div className="carousel-text">
                    <h6 className="text-warning">{carrosseltext}</h6>
                    <h1>{carrosseltitle}</h1>
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