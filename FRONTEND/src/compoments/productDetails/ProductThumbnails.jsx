import React from 'react';

const ProductThumbnails = ({ thumbnails, onThumbnailClick }) => {
  return (
    <div className="thumbnail-container">
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index + 1}`}
          className="thumbnail"
          onClick={() => onThumbnailClick(thumbnail)}
        />
      ))}
    </div>
  );
};

export default ProductThumbnails;
