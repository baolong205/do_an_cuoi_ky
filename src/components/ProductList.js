import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

const ProductList = ({ products, addToCart }) => {
  const [visibleCount, setVisibleCount] = useState(15); // Bắt đầu với 20 sản phẩm đầu tiên

  const handleSeeMore = () => {
    setVisibleCount(visibleCount + 15); // Tăng visibleCount lên 20 mỗi lần
  };

  console.log('Total products:', products.length); // Kiểm tra tổng số sản phẩm
  console.log('Visible count:', visibleCount); // Kiểm tra số sản phẩm hiện tại

  return (
    <div className="product-list">
      {/* Render chỉ những sản phẩm đầu tiên với số lượng 'visibleCount' */}
      {products.slice(0, visibleCount).map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}

      {/* Kiểm tra số lượng sản phẩm */}
      {products.length > visibleCount && (
        <button className="see-more-btn" onClick={handleSeeMore}>
          See More
        </button>
      )}
    </div>
  );
};

export default ProductList;
