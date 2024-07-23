import React from 'react';

const ProductPrice = ({ price, originalPrice, installment }) => {
  return (
    <div className="product-price">
      <h1>R$ {price}</h1>
      <p>R$ {originalPrice}</p>
      <div className="product-prc">
        <p>ou R$ {installment} em até 10x sem juros</p>
      </div>
    </div>
  );
};

export default ProductPrice;
