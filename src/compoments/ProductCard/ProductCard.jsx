import React from 'react';
import './ProductCard.css';
import productImage from "../../../public/produc-image-6.png";

export default function Card({ produto }) {
    return (
        <div className="card " style={{ width: '18rem', margin: '20px auto' }}>
            <img src={productImage} className="card-img-top" alt={produto.name} />
            <div className="card-body">
                <p className="card-text text-muted">{produto.category}</p>
                <h5 className="card-title">{produto.name}</h5>
                <p>
                    <span className="old-price">R$ {produto.oldprice}</span>
                    <span className="new-price">R$ {produto.price}</span>
                </p>
            </div>
        </div>
    );
};



