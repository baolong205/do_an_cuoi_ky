import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Thêm useNavigate

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate(); // Khởi tạo navigate

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <img 
        src={product.image} 
        alt={product.name} 
        loading="lazy"
      />
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price.toLocaleString('vi-VN')} VND</p>

      {/* Thông tin chi tiết sản phẩm */}
      <div className="product-info">
      </div>
      <p><strong>Description:</strong> {product.description}</p>

      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>

      {/* Nút trở lại Home */}
      <button onClick={() => navigate('/')} className="back-to-home-btn">
        Back
      </button>
    </div>
  );
};

export default ProductDetail;
