import React from 'react';

const ProductVariations = ({ sizes, colors }) => {
  return (
    <div className="product-variations">
      <div className="variation">
        <label>Tamanho</label>
        <div className="button-tamanhos">
          {sizes.map((size, index) => (
            <button key={index}>{size}</button>
          ))}
        </div>
      </div>
      <div className="variation">
        <label>Cor</label>
        <div>
          {colors.map((color, index) => (
            <button key={index} className={`button button-${index + 1}`}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariations;
