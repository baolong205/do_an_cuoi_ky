import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'
// Hàm định dạng giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' VND'; 
};

const ProductCard = React.memo(({ product, addToCart }) => {
  const imageUrl = product.image

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={product.name || 'Product image'}
        loading="lazy" // Giúp tải hình ảnh nhẹ nhàng hơn
      />
      <h3>{product.name}</h3>
      {/* Hiển thị giá đã được định dạng với "VND" */}
      <p>{formatPrice(product.price)}</p>
      <Link to={`/product/${product.id}`}>
        <button className="view-product-btn">
          View Product
        </button>
      </Link>
    </div>
  );
});

export default ProductCard;
