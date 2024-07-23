import React from 'react';

const ProductDescription = ({ description }) => {
  return (
    <div className="details">
      <p>Descrição do produto</p>
      <h2>{description}</h2>
    </div>
  );
};

export default ProductDescription;
