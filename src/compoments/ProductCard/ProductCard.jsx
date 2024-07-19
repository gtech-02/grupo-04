import React from 'react';
import './ProductCard.css';
import productImage from "../../../public/produc-image-7.jpeg"


const Card = () => {
    return (
        <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
            <img src={productImage} className="card-img-top" alt="Tênis K-Swiss V8" />
            <div className="card-body">
                <p className="card-text text-muted">Tênis</p>
                <h5 className="card-title">K-Swiss V8 - Masculino</h5>
                <p>
                    <span className="old-price">$200</span>
                    <span className="new-price">$100</span>
                </p>
            </div>
        </div>
    );
};


export default Card;
