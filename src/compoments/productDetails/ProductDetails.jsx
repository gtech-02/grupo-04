import React, { useState } from 'react';
import ProductImage from './ProductImage';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import ProductVariations from './ProductVariations';
import AddToCartButton from './AddToCartButton';
import ProductThumbnails from './ProductThumbnails';
import './productDetails.css';
import mainImage from '../../../public/produc-image-5.jpeg';
import thumbnail1 from '../../../public/produc-image-2.jpeg';
import thumbnail2 from '../../../public/produc-image-3.jpeg';
import thumbnail3 from '../../../public/produc-image-4.jpeg';
import thumbnail4 from '../../../public/produc-image-1.jpeg';
import thumbnail5 from '../../../public/produc-image-7.jpeg'
const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5];

  const product = {
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    category: 'Casual | Nike | REF:38416711',
    rating: 4,
    reviews: 90,
    price: 219.0,
    originalPrice: 350.0,
    installment: 1789.99,
    description:
      'O Tênis Masculino Nike Revolution 6 Next Nature revisita o original icônico com linhas de design modernas e amortecimento super leve. O amortecimento Air-Sole revolucionário da Nike foi introduzido nos calçados Nike em 1978.',
    sizes: [39, 40, 41, 42, 43],
    colors: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'],
  };

  return (
    <div className="product-details-page">
      
      <div className="product-container">
        <div className='images-container'>
        <ProductImage mainImage={currentImage} />
        <ProductThumbnails thumbnails={thumbnails} onThumbnailClick={setCurrentImage} />
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
