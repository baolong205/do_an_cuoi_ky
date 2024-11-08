// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard'; // Giả sử bạn có component ProductCard để hiển thị mỗi sản phẩm

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default ProductList;
