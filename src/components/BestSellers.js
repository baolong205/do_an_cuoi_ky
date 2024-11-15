import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = ({ bestSellers, addToCart }) => {
    return (
        <div className="best-sellers">
            <h2>Sản phẩm bán chạy</h2>
            <div className="product-list">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
