import React from 'react';

const ProductImage = ({ mainImage }) => {
  return (
    <div className="product-image">
      <img src={mainImage} alt="Produto Principal" />
    </div>
  );
};

export default ProductImage;
