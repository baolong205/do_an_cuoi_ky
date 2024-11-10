import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams(); // Lấy id từ URL
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
        <ul>
          <li><strong>Display:</strong> {product.display}</li>
          <li><strong>Chipset:</strong> {product.chipset}</li>
          <li><strong>Camera:</strong> {product.camera}</li>
          <li><strong>Storage:</strong> {product.storage}</li>
        </ul>
      </div>
      <p><strong>Description:</strong> {product.description}</p>

      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
