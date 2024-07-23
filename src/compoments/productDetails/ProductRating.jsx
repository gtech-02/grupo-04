import React from 'react';
import './productDetails.css';

const ProductRating = ({ rating, reviews }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        &#9733;
      </span>
    );
  }

  return (
    <div className="product-rating">
      <div className="rating">{stars}</div>
      <div className="avaliacao">
        <p>({reviews} avaliações)</p>
      </div>
    </div>
  );
};

export default ProductRating;