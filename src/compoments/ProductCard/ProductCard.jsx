import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Discount from '../Gallery/discount'

export default function Card({ produto }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
            {produto.discount && <Discount desconto = {produto.discountValue}/>}
            <Link to={`/ProductViewPage/${produto.id}`} className="card-link">
                <img id="imagemcard" src={produto.img} className="card-img-top" alt={produto.name} />
            </Link>
            <div className="card-body">
                <p className="card-text text-muted">{produto.category}</p>
                <h5 className="card-title">{produto.name}</h5>
                <p>
                    {produto.discount ? (
                        <>
                            <span className="old-price">R$ {produto.originalPrice}</span>
                            <span className="new-price">R$ {produto.originalPrice - (produto.originalPrice * produto.discountValue / 100)}</span>
                        </>
                    ) : (
                        <span className="new-price">R$ {produto.originalPrice}</span>
                    )}

                </p>
            </div>
        </div>
    );
}



