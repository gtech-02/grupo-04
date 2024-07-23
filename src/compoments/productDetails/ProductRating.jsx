import React from 'react';

const ProductRating = ({ rating, reviews }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'estrelas' : ''}>
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
