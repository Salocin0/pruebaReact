// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', backgroundColor: '#FFFFFF', borderRadius: '15px', color: 'black' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
    </div>
  );
};

export default ProductCard;
