import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function Card({ produto }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
            <Link to={`/ProductViewPage/${produto.id}`} className="card-link">
                <img src={produto.img} className="card-img-top" alt={produto.name} />
            </Link>
            <div className="card-body">
                <p className="card-text text-muted">{produto.category}</p>
                <h5 className="card-title">{produto.name}</h5>
                <p>
                    <span className="old-price">R$ {produto.originalPrice}</span>
                    <span className="new-price">R$ {produto.price}</span>
                </p>
            </div>
        </div>
    );
}



