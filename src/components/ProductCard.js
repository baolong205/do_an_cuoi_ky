import React from 'react';
import { Link } from 'react-router-dom';
import productImage from '../assets/images/image1.jpg';
import './components.css'
// Hàm định dạng giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' VND'; // Thêm "VND" vào sau giá
};

const ProductCard = React.memo(({ product, addToCart }) => {
  // Sử dụng fallback hình ảnh nếu không có hình ảnh của sản phẩm
  const imageUrl = product.image || productImage;

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
