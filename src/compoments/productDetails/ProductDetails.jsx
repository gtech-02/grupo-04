import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductVariations from './ProductVariations';
import AddToCartButton from './AddToCartButton';
import ProductThumbnails from './ProductThumbnails';
import './productDetails.css';
import { produto } from '../Product';

const ProductDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = produto.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImage(foundProduct.img); // Atualiza a imagem principal ao carregar um novo produto
    }
  }, [id]);

  if (!product) {
    return <div className="container mt-5">Produto não encontrado.</div>;
  }

  const handleThumbnailClick = (thumbnail) => {
    setCurrentImage(thumbnail);
  };

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  return (
    <div className="product-details-page">
      <div className="product-container">
        <div className='images-container'>
          <ProductImage mainImage={currentImage} />
          <ProductThumbnails
            thumbnails={product.thumbnails}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <h2>{product.category}</h2>
          <ProductRating rating={product.rating} reviews={product.reviews} />
          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
            installment={product.installment}
          />
          <ProductDescription description={product.description} />
          <ProductVariations sizes={product.sizes} colors={product.colors} />
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;