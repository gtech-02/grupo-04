import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import Discount from '../Gallery/discount'
import ProductRating from '../productDetails/ProductRating';
import { produto } from '../../../json/Product';

export default function Card({ produto }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
            {produto.discount && <Discount desconto={produto.discountValue} />}
            <Link to={`/ProductViewPage/${produto.id}`} className="card-link">
                <img id="imagemcard" src={produto.img} className="card-img-top" alt={produto.name} />
            </Link>
            <div className="card-body">
                <p className="card-text text-muted">{produto.brand} | {produto.gender} | {produto.category} | {produto.state}</p>
                <h5 className="card-title">{produto.name}</h5>
                <p>
                    {produto.discount && produto.discountValue >= 1 && produto.discountValue <= 99 ? (
                        <>
                            <span className="old-price">R$ {produto.originalPrice.toFixed(2)}</span>
                            <span className="new-price">
                                R$ {(produto.originalPrice - (produto.originalPrice * produto.discountValue / 100)).toFixed(2)}
                            </span>
                        </>
                    ) : (
                        <span className="new-price">R$ {produto.originalPrice.toFixed(2)}</span>
                    )}

                </p>
                <ProductRating rating= {produto.rating}/>
            </div>
        </div>
    );
}



