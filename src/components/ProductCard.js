import React from 'react';
import productImage from '../assets/images/image1.jpg';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image || productImage} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} VND</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
