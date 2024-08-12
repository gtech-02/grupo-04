import React from 'react';

const ProductPrice = ({originalPrice, installment, discountValue,discount}) => {
  return (
    <div className="product-price">
      {discount ? (
        <>
        <h1>R$ {originalPrice - (originalPrice * discountValue / 100)}</h1>
        <p id="originalprice">R$ {originalPrice}</p>
        <div className="product-prc">
        <p>ou R$ {(originalPrice - (originalPrice * discountValue / 100))/5} em até 5x sem juros</p>
      </div>
        </>
      ) : (
        <>
        <h1>R$ {originalPrice}</h1>
        <div className="product-prc">
        <p>ou R$ {originalPrice/5} em até 5x sem juros </p>
      </div>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
