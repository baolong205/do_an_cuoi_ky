import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, currentPage, nextPage, prevPage, hasNextPage }) => {
  return (

    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

      <div className="pagination-controls">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={!hasNextPage}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
